import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const { scene } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
