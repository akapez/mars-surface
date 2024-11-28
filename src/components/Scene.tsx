import { Canvas } from "@react-three/fiber";
import { Fragment, useMemo } from "react";
import * as THREE from "three";
import Territory from "./Territory";
import { Loader, OrbitControls } from "@react-three/drei";

function CameraHelper() {
  const camera = new THREE.PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

const Scene = () => {
  const fov = 45;
  const aspect = 1920 / 1080;
  const near = 1.0;
  const far = 1000.0;

  const camera_ = useMemo(() => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-2, 1.5, 0.7);
    camera.rotation.set(0, Math.PI, 0);
    camera.rotateY(-230);
    return camera;
  }, []);

  return (
    <Fragment>
      <Canvas flat camera={camera_} frameloop="demand" dpr={2} gl={{ antialias: false }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-3, -3, 2]} />
        <Territory />
        <OrbitControls />
        <CameraHelper />
        <gridHelper scale={1} />
      </Canvas>
      <Loader />
    </Fragment>
  );
};

export default Scene;
