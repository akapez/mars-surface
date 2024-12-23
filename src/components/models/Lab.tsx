/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/building/scene.gltf -t -r public 
Author: berkay.tari (https://sketchfab.com/berkay.tari)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-sci-fi-lab-e84fd3405b34421095c70b0e09cc3111
Title: Low Poly Sci-Fi Lab
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cam_Tavan_Material_0: THREE.Mesh;
    Cerceve_Material002_0: THREE.Mesh;
    Alt_Material002_0: THREE.Mesh;
    Door_Material003_0: THREE.Mesh;
    Door_Material004_0: THREE.Mesh;
    Door_Material005_0: THREE.Mesh;
    Door_Material006_0: THREE.Mesh;
    Circle001_Material011_0: THREE.Mesh;
    Circle001_Material013_0: THREE.Mesh;
    Circle002_Material011_0: THREE.Mesh;
    Circle002_Material013_0: THREE.Mesh;
    Circle003_Material009_0: THREE.Mesh;
    Circle003_Material004_0: THREE.Mesh;
    Circle006_Material007_0: THREE.Mesh;
    Circle006_Material008_0: THREE.Mesh;
    Circle007_Material007_0: THREE.Mesh;
    Circle007_Material008_0: THREE.Mesh;
    Circle008_Material011_0: THREE.Mesh;
    Circle008_Material013_0: THREE.Mesh;
    Circle009_Material011_0: THREE.Mesh;
    Circle009_Material013_0: THREE.Mesh;
    Circle010_Material011_0: THREE.Mesh;
    Circle010_Material013_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
};

export default function Lab(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/mars-surface/building/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-231.02, 145.767, 718.15]}
          rotation={[Math.PI / 2, 0, 0.298]}
          scale={0.011}
        >
          <mesh geometry={nodes.Door_Material003_0.geometry} material={materials["Material.003"]} />
          <mesh geometry={nodes.Door_Material004_0.geometry} material={materials["Material.004"]} />
          <mesh geometry={nodes.Door_Material005_0.geometry} material={materials["Material.005"]} />
          <mesh geometry={nodes.Door_Material006_0.geometry} material={materials["Material.006"]} />
        </group>
        <group
          position={[650.084, 69.043, 407.51]}
          rotation={[Math.PI / 2, 0, 0.567]}
          scale={0.005}
        >
          <mesh
            geometry={nodes.Circle001_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Circle001_Material013_0.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          position={[685.751, 46.132, 344.322]}
          rotation={[Math.PI / 2, 0, 0.567]}
          scale={0.005}
        >
          <mesh
            geometry={nodes.Circle002_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Circle002_Material013_0.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          position={[6.191, 107.057, 789.88]}
          rotation={[Math.PI / 2, 0, 0.304]}
          scale={[0.008, 0.008, 0.006]}
        >
          <mesh
            geometry={nodes.Circle003_Material009_0.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            geometry={nodes.Circle003_Material004_0.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          position={[-314.37, 107.019, 777.554]}
          rotation={[Math.PI / 2, 0, 1.866]}
          scale={[0.008, 0.007, 0.008]}
        >
          <mesh
            geometry={nodes.Circle006_Material007_0.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Circle006_Material008_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          position={[-190.193, 107.019, 815.278]}
          rotation={[Math.PI / 2, 0, 1.866]}
          scale={[0.008, 0.007, 0.008]}
        >
          <mesh
            geometry={nodes.Circle007_Material007_0.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Circle007_Material008_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group
          position={[-599.892, 77.277, -484.331]}
          rotation={[Math.PI / 2, 0, -2.575]}
          scale={0.006}
        >
          <mesh
            geometry={nodes.Circle008_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Circle008_Material013_0.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          position={[-640.872, 46.132, -410.917]}
          rotation={[Math.PI / 2, 0, -2.575]}
          scale={0.005}
        >
          <mesh
            geometry={nodes.Circle009_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Circle009_Material013_0.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <group
          position={[-536.21, 35.887, -528.421]}
          rotation={[Math.PI / 2, 0, -2.486]}
          scale={0.004}
        >
          <mesh
            geometry={nodes.Circle010_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Circle010_Material013_0.geometry}
            material={materials["Material.013"]}
          />
        </group>
        <mesh
          geometry={nodes.Cam_Tavan_Material_0.geometry}
          material={materials.Material}
          position={[0, 179.41, 0]}
        />
        <mesh
          geometry={nodes.Cerceve_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, 179.41, 0]}
        />
        <mesh
          geometry={nodes.Alt_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, 101.259, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mars-surface/building/scene.gltf");
