import { CuboidCollider, RigidBody } from "@react-three/rapier";
import GeneratorModel from "./models/Generator";
import Surface from "./Surface";
import GeneratorSmall from "./models/GeneratorSmall";
import LandingPad from "./models/LandingPad";
import Rocket from "./models/Rocket";
import Spaceman from "./models/Spaceman";

const Territory = () => {
  return (
    <mesh>
      {/* <RigidBody type="fixed" colliders="trimesh">
        <GeneratorModel
          scale={[0.5, 0.5, 0.5]}
          position={[10.14, -0.1, -9.31]}
          rotation={[0, 4.71, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <Spaceman scale={[0.01, 0.01, 0.01]} position={[-2, 0.5, -20.31]} rotation={[0, 1, 0]} />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <LandingPad
          scale={[5.6, 5.6, 5.6]}
          position={[-10.14, 0.4, -9.31]}
          rotation={[0, 4.71, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <Rocket
          scale={[0.29, 0.29, 0.29]}
          position={[-10.14, 5.3, -9.31]}
          rotation={[0, 4.71, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <GeneratorSmall position={[10.14, 0.4, -3.31]} rotation={[0, 4.71, 0]} />
      </RigidBody> */}
      <RigidBody type="fixed" colliders="trimesh">
        <Surface scale={[6, 6, 6]} />
        <CuboidCollider args={[80, 2, 80]} position={[0, -1.9, 0]} />
      </RigidBody>
    </mesh>
  );
};

export default Territory;
