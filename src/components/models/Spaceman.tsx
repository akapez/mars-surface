/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/spaceman/scene.gltf -t -r public 
Author: LostBoyz2078 (https://sketchfab.com/LostModels2025)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/space-man-bd46f87913ea4c219019f6b6d0e96e3d
Title: Space man
*/

import * as THREE from "three";
import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";

type ActionName = "GltfAnimation 0";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    ReconMat: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export default function Spaceman(props: JSX.IntrinsicElements["group"]) {
  const ref = React.useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/mars-surface/spaceman/scene.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["GltfAnimation 0"]?.play();
  }, [actions]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="GLTF_created_0">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.ReconMat}
                  skeleton={nodes.Object_7.skeleton}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mars-surface/spaceman/scene.gltf");
