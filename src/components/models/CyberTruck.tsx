/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/cyber-truck/scene.gltf -t -r public 
Author: SimonStrikesBack (https://sketchfab.com/SimonStrikesBack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cybertruck-f3c9f419c0924e968deed17196248c98
Title: Cybertruck
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
  };
  materials: {
    Stainless_Steel: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Black_Metal: THREE.MeshStandardMaterial;
    Door_Handle: THREE.MeshStandardMaterial;
    Black_Leather: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Tire: THREE.MeshStandardMaterial;
    White_Emission: THREE.MeshStandardMaterial;
    Red_Emission: THREE.MeshStandardMaterial;
    Dashboard: THREE.MeshStandardMaterial;
  };
};

export default function CyberTruck(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mars-surface/cyber-truck/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-0.729, 0.914, 0.724]}>
        <group position={[-0.778, -0.2, 0.509]}>
          <mesh geometry={nodes.Object_11.geometry} material={materials.Stainless_Steel} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Black_Metal} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.Door_Handle} />
        </group>
        <group position={[-0.343, -0.551, -0.243]} scale={0.139}>
          <mesh geometry={nodes.Object_16.geometry} material={materials.Black_Leather} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.Stainless_Steel} />
        </group>
        <group position={[-0.126, -0.167, 0.509]}>
          <mesh geometry={nodes.Object_19.geometry} material={materials.Stainless_Steel} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.Black_Metal} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Door_Handle} />
        </group>
        <group position={[0.302, -0.551, -0.275]} scale={0.123}>
          <mesh geometry={nodes.Object_24.geometry} material={materials.Black_Leather} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.Stainless_Steel} />
        </group>
        <group
          position={[-0.722, -0.216, 0.006]}
          rotation={[0, 0, 0.102]}
          scale={[0.004, 0.071, 0.109]}
        >
          <mesh geometry={nodes.Object_27.geometry} material={materials.Black_Metal} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.Screen} />
        </group>
        <group position={[-0.643, -0.184, 0.296]} rotation={[0, 0, 0.402]} scale={0.028}>
          <mesh geometry={nodes.Object_30.geometry} material={materials.Stainless_Steel} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.Screen} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.Black_Metal} />
        </group>
        <group position={[-1.122, -0.637, 0.48]} rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Object_34.geometry} material={materials.Tire} />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.Black_Metal}
            position={[-0.056, 0, 0]}
          />
        </group>
        <group position={[0.995, -0.637, 0.48]} rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Object_38.geometry} material={materials.Tire} />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.Black_Metal}
            position={[-0.056, 0, 0]}
          />
        </group>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Stainless_Steel} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Black_Metal} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.White_Emission} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Red_Emission} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Dashboard} />
      </group>
    </group>
  );
}

useGLTF.preload("/mars-surface/cyber-truck/scene.gltf");
