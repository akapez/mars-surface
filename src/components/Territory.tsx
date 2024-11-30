import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { PositionalAudio } from "@react-three/drei";

//models
import Generator from "./models/Generator";
import Surface from "./Surface";
import GeneratorSmall from "./models/GeneratorSmall";
import LandingPad from "./models/LandingPad";
import Starship from "./models/Starship";
import CyberTruck from "./models/CyberTruck";
import Lab from "./models/Lab";

interface TerritoryProps {
  ready: boolean;
}

export default function Territory({ ready }: TerritoryProps) {
  return (
    <mesh>
      <RigidBody type="fixed" colliders="trimesh">
        <Lab scale={[1.5, 1.5, 1.5]} position={[7.14, 1.2, -50.31]} rotation={[0, -5.9, 0]} />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <CyberTruck
          scale={[1.5, 1.5, 1.5]}
          position={[7.14, 1.7, -20.31]}
          rotation={[0.05, -6.71, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <group position={[10.14, 0.1, -9.31]}>
          <Generator scale={[0.5, 0.5, 0.5]} rotation={[0, 4.71, 0]} />
          {ready && (
            <PositionalAudio url="/mars-surface/audio/generator.mp3" distance={1} loop autoplay />
          )}
        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <LandingPad scale={[10, 10, 10]} position={[-10.14, 0.4, -9.31]} rotation={[0, 4.71, 0]} />
      </RigidBody>
      <RigidBody type="fixed">
        <Starship
          scale={[0.01, 0.01, 0.01]}
          position={[-10.14, 53.4, -9.31]}
          rotation={[0, 7.81, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <GeneratorSmall position={[10.14, 0.2, -3.31]} rotation={[0, 4.71, 0]} />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <Surface scale={[6, 6, 6]} />
        <CuboidCollider args={[80, 2, 80]} position={[0, -1.9, 0]} />
      </RigidBody>
    </mesh>
  );
}
