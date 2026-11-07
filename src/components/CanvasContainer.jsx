import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import Loader from "./Loader";
import { Island } from "../models/Island";
import { Plane } from "../models/Plane";
import { Bird } from "../models/Bird";
import Sky from "../models/Sky";

export default function CanvasContainer({
  isRotating,
  setIsRotating,
  currentStage,
  setCurrentStage,
  targetRotation,
  setTargetRotation,
  isMobile,
}) {
  const { islandScale, islandPosition, biplaneScale, biplanePosition } = useMemo(
    () => ({
      islandScale: isMobile ? [0.85, 0.85, 0.85] : [1, 1, 1],
      islandPosition: isMobile ? [0, -7.0, -44] : [0, -6.5, -43],
      biplaneScale: isMobile ? [1.4, 1.4, 1.4] : [2.8, 2.8, 2.8],
      biplanePosition: isMobile ? [0, -2.0, 0] : [0, -3.8, -4],
    }),
    [isMobile]
  );

  return (
    <Canvas
      className={`w-full h-full bg-transparent touch-none select-none ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000 }}
      dpr={[1, isMobile ? 1.5 : 2]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
        alpha: true,
      }}
    >
      <Suspense fallback={<Loader />}>
        {/* Soft atmospheric lighting matching the pastel sky */}
        <directionalLight position={[1, 1, 1]} intensity={2.2} />
        <ambientLight intensity={0.6} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        {/* 3D Scene Actors */}
        <Bird />
        <Sky isRotating={isRotating} />
        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          targetRotation={targetRotation}
          setTargetRotation={setTargetRotation}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />
        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

