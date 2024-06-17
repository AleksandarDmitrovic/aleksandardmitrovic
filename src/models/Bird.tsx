import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const { scene } = useGLTF(birdScene);

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;