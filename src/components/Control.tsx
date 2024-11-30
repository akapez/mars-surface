import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  interactionGroups,
  RapierRigidBody,
  RigidBody,
  Vector3Object,
} from "@react-three/rapier";
import { IfInSessionMode } from "@react-three/xr";
import { useRef } from "react";
import * as THREE from "three";

import VRControl from "./VRControl";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const vectorHelper = new THREE.Vector3();
const quaternionHelper = new THREE.Quaternion();
const quaternionHelper2 = new THREE.Quaternion();
const eulerHelper = new THREE.Euler();

export function Control() {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const [, getKeys] = useKeyboardControls();

  const playerMove = ({
    forward,
    backward,
    left,
    right,
    rotationYVelocity,
    velocity,
    newVelocity,
  }: {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    rotationYVelocity: number;
    velocity?: Vector3Object;
    newVelocity?: THREE.Vector3;
  }) => {
    if (rigidBodyRef.current == null) {
      return;
    }
    if (!velocity) {
      velocity = rigidBodyRef.current?.linvel();
    }

    //apply rotation
    const { x, y, z, w } = rigidBodyRef.current.rotation();
    quaternionHelper.set(x, y, z, w);
    quaternionHelper.multiply(
      quaternionHelper2.setFromEuler(eulerHelper.set(0, rotationYVelocity, 0, "YXZ"))
    );
    rigidBodyRef.current?.setRotation(quaternionHelper, true);

    if (newVelocity) {
      // If we have a new velocity, we're in VR mode
      rigidBodyRef.current?.setLinvel(
        { x: newVelocity.x, y: velocity?.y ?? 0, z: newVelocity.z },
        true
      );
      return;
    }

    frontVector.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    sideVector.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .applyQuaternion(quaternionHelper)
      .setComponent(1, 0)
      .normalize()
      .multiplyScalar(SPEED);
    rigidBodyRef.current?.setLinvel({ x: direction.x, y: velocity?.y ?? 0, z: direction.z }, true);
  };

  useFrame((state) => {
    if (rigidBodyRef.current == null) {
      return;
    }
    const { forward, backward, left, right } = getKeys();
    const velocity = rigidBodyRef.current.linvel();

    vectorHelper.set(velocity.x, velocity.y, velocity.z);

    // update camera
    const { x, y, z } = rigidBodyRef.current.translation();
    state.camera.position.set(x, y, z);

    // movement
    if (rigidBodyRef.current) {
      playerMove({
        forward,
        backward,
        left,
        right,
        rotationYVelocity: 0,
        velocity,
      });
    }
  });

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders={false}
        mass={1}
        type="dynamic"
        position={[0, 1, 0]}
        enabledRotations={[false, false, false]}
        canSleep={false}
        collisionGroups={interactionGroups([0], [0])}
      >
        <CapsuleCollider args={[0.7, 0.5]} />
        <IfInSessionMode allow={["immersive-ar", "immersive-vr"]}>
          <VRControl playerMove={playerMove} />
        </IfInSessionMode>
      </RigidBody>
    </>
  );
}
