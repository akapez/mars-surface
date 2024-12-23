/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/landing-pad/scene.gltf -t -r public 
Author: JaiMoon456 (https://sketchfab.com/JaiMoon456)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/landing-pad-76e0c5ffd57b46e09190f5484204cc6d
Title: Landing_Pad
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial;
  };
};

export default function LandingPad(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mars-surface/landing-pad/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mars-surface/landing-pad/scene.gltf");
