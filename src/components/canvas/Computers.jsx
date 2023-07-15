import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";
import { Canvas } from '@react-three/fiber'

import { useGLTF, OrbitControls, Preload, useProgress } from '@react-three/drei'

const Computers = ({ isMobile }) => {
  console.log(isMobile, "from coumputer")

  const computer = (useGLTF('../../../desktop_pc/scene.gltf'));
  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        intensity={1}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 1}
        rotation={[-0.01, -0.2, -0.1]}
        position={isMobile ? [0, -4.6, -2.02] : [0, -4.25, -1.5]}
      />
    </mesh>
  );
};



const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const windowSize = window.matchMedia("(max-width: 500px)")

    function sizeChanging(e) {
      setIsMobile(e.matches)
    }

    windowSize.addEventListener("change", sizeChanging)
    return () => {
      windowSize.removeEventListener("change", sizeChanging);
    };
  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={CanvasLoader}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  );
}
export default ComputersCanvas;