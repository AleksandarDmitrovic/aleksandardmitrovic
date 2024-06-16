import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  Popup
</div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}></Suspense>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight color="#B1E1FF" groundColor="#000000" />
        <Sky />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
        />
      </Canvas>
    </section>
  );
};

export default Home;
