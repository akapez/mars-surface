import { Physics } from "@react-three/cannon";
import GeneratorModel from "./models/Generator";
import Surface from "./Surface";

const Territory = () => {
  return (
    <mesh>
      {/* <Physics gravity={[0, -50, 0]}> */}
      <GeneratorModel
        scale={[0.6, 0.6, 0.6]}
        position={[10.14, -0.1, -9.31]}
        rotation={[0, 4.71, 0]}
      />
      <Surface scale={[6, 6, 6]} />
      {/* </Physics> */}
    </mesh>
  );
};

export default Territory;
