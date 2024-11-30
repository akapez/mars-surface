import { Vector3Object } from "@react-three/rapier";
import { useXRControllerLocomotion, XROrigin } from "@react-three/xr";
import * as THREE from "three";

interface PlayerMoveParams {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  rotationYVelocity: number;
  velocity?: Vector3Object;
  newVelocity?: THREE.Vector3;
}

interface VRControlProps {
  playerMove: (params: PlayerMoveParams) => void;
}

export default function VRControl({ playerMove }: VRControlProps) {
  const physicsMove = (velocity: THREE.Vector3, rotationYVelocity: number) => {
    playerMove({
      forward: false,
      backward: false,
      left: false,
      right: false,
      rotationYVelocity,
      velocity: undefined,
      newVelocity: velocity,
    });
  };

  useXRControllerLocomotion(physicsMove, { speed: 2 });

  return <XROrigin position={[0, -1.25, 0]} />;
}
