import { Canvas } from "@react-three/fiber";
import { Fragment, useState } from "react";
import { KeyboardControls, Loader, PointerLockControls, Sky } from "@react-three/drei";
import { createXRStore, XR } from "@react-three/xr";
import { Light } from "./helpers";
import { Physics } from "@react-three/rapier";

import Territory from "./Territory";
import { Control } from "./Control";

const store = createXRStore();

export default function Scene() {
  const [ready, setReady] = useState<boolean>(false);

  const handleVR = () => {
    setReady(true);
    store.enterVR();
  };
  return (
    <Fragment>
      <button
        style={{
          position: "absolute",
          padding: "12px 24px",
          width: "auto",
          border: "2px solid  black",
          borderRadius: "4px",
          background: "black",
          color: "white",
          font: "0.8125rem sans-serif",
          outline: "none",
          zIndex: 10000,
          cursor: "pointer",
          opacity: 0.5,
          bottom: "1rem",
          left: "50%",
          boxShadow: "0px 0px 20px rgba(0,0,0,1)",
          transform: "translate(-50%, 0)",
          userSelect: "none",
        }}
        onClick={handleVR}
      >
        Enter VR
      </button>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
        ]}
      >
        <Canvas camera={{ position: [-9, 2, 10], fov: 30 }}>
          <XR store={store}>
            {/* <IfInSessionMode deny={["immersive-vr", "immersive-ar"]}>
              <CameraControls makeDefault />
            </IfInSessionMode> */}
            <Sky inclination={0.52} />
            <fog attach="fog" args={["#d0d0d0", 30, 80]} />
            <ambientLight intensity={0.4} />
            <Light />
            <Physics gravity={[0, -30, 0]}>
              <Territory ready={ready} />
              <Control />
            </Physics>
            {/* <Camera /> */}
            {/* <gridHelper scale={5} /> */}
            <PointerLockControls />
          </XR>
        </Canvas>
      </KeyboardControls>
      <Loader />
    </Fragment>
  );
}
