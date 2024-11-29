import { Canvas } from "@react-three/fiber";
import { Fragment, useState } from "react";
import Territory from "./Territory";
import { CameraControls, Loader, Sky } from "@react-three/drei";
import { createXRStore, IfInSessionMode, TeleportTarget, XR, XROrigin } from "@react-three/xr";
import { Light, Camera } from "./helpers";
import { Vector3 } from "three";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
  emulate: {
    headset: {
      position: [0, 1, 0],
    },
    controller: {
      left: {
        position: [-0.2, 1, -0.3],
      },
      right: {
        position: [0.2, 1, -0.3],
      },
    },
  },
});

const Scene = () => {
  const [position, setPosition] = useState(new Vector3());
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
        onClick={() => store.enterVR()}
      >
        Enter VR
      </button>
      <Canvas camera={{ position: [-9, 2, 10], fov: 30 }}>
        <XR store={store}>
          <IfInSessionMode deny={["immersive-vr", "immersive-ar"]}>
            <CameraControls makeDefault />
          </IfInSessionMode>
          <fog attach="fog" args={["#d0d0d0", 30, 80]} />
          <ambientLight intensity={0.4} />
          <Light />
          {/* <XROrigin position={position} /> */}
          {/* <TeleportTarget onTeleport={setPosition}> */}
          {/* <mesh scale={[10, 1, 10]} position={[0, -0.5, 0]}> */}
          <Territory />
          {/* </mesh> */}
          {/* </TeleportTarget> */}

          {/* <Camera /> */}
          {/* <gridHelper scale={5} /> */}
          <Sky inclination={0.52} />
        </XR>
      </Canvas>
      <Loader />
    </Fragment>
  );
};

export default Scene;
