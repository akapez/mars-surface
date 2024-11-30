/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/cyber-truck/scene.gltf -t -r public 
Author: Alpaq (https://sketchfab.com/Alpaq)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tesla-cyber-truck-75ab7668aad54e5886712f556ab78abc
Title: Tesla // Cyber truck
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
  };
  materials: {
    body: THREE.MeshStandardMaterial;
    headlights: THREE.MeshStandardMaterial;
    black_glass: THREE.MeshStandardMaterial;
    back_lights: THREE.MeshStandardMaterial;
    glass: THREE.MeshPhysicalMaterial;
    Material: THREE.MeshStandardMaterial;
    plate: THREE.MeshStandardMaterial;
    metal_planks: THREE.MeshStandardMaterial;
    rubber: THREE.MeshStandardMaterial;
    rubber_grey: THREE.MeshStandardMaterial;
  };
};

export default function CyberTruck(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mars-surface/cyber-truck/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.074, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.822, -0.485, 1.693]} rotation={[-2.805, 0.412, -1.859]} scale={0.151}>
            <mesh geometry={nodes.Object_13.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.rubber} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.rubber_grey} />
          </group>
          <group
            position={[0.822, -0.485, -1.466]}
            rotation={[-2.805, 0.412, -1.859]}
            scale={0.151}
          >
            <mesh geometry={nodes.Object_17.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.rubber} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.rubber_grey} />
          </group>
          <group position={[-0.844, -0.485, 1.693]} rotation={[2.805, -0.412, 1.283]} scale={0.151}>
            <mesh geometry={nodes.Object_21.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.rubber} />
            <mesh geometry={nodes.Object_23.geometry} material={materials.rubber_grey} />
          </group>
          <group
            position={[-0.844, -0.485, -1.466]}
            rotation={[2.805, -0.412, 1.283]}
            scale={0.151}
          >
            <mesh geometry={nodes.Object_25.geometry} material={materials.Material} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.rubber} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.rubber_grey} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.headlights} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.black_glass} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.back_lights} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Material} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.plate} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.metal_planks} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mars-surface/cyber-truck/scene.gltf");
