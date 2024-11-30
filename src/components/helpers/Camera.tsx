import * as THREE from "three";

export function Camera() {
  const camera = new THREE.PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}
