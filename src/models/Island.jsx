/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
  isRotating,
  setIsRotating,
  currentStage,
  setCurrentStage,
  targetRotation,
  setTargetRotation,
  ...props
}) {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.94;

  // Handle pointer down (touch or mouse)
  const handlePointerDown = (event) => {
    event.stopPropagation();
    setIsRotating(true);
    // Cancel any active auto-rotation when user touches/clicks
    if (setTargetRotation) setTargetRotation(null);

    const clientX = event.clientX ?? (event.touches ? event.touches[0].clientX : 0);
    lastX.current = clientX;
  };

  // Handle pointer up
  const handlePointerUp = (event) => {
    event.stopPropagation();
    setIsRotating(false);
  };

  // Handle pointer move
  const handlePointerMove = (event) => {
    if (!isRotating) return;
    event.stopPropagation();

    const clientX = event.clientX ?? (event.touches ? event.touches[0].clientX : 0);
    const delta = (clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.012 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.012 * Math.PI;
  };

  // Handle keyboard arrows
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      if (setTargetRotation) setTargetRotation(null);
      islandRef.current.rotation.y += 0.008 * Math.PI;
      rotationSpeed.current = 0.008;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      if (setTargetRotation) setTargetRotation(null);
      islandRef.current.rotation.y -= 0.008 * Math.PI;
      rotationSpeed.current = -0.008;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Attach event handlers safely
  const handlers = useRef();
  handlers.current = {
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  };

  useEffect(() => {
    const canvas = gl.domElement;

    const down = (e) => handlers.current.handlePointerDown(e);
    const up = (e) => handlers.current.handlePointerUp(e);
    const move = (e) => handlers.current.handlePointerMove(e);
    const keyDown = (e) => handlers.current.handleKeyDown(e);
    const keyUp = (e) => handlers.current.handleKeyUp(e);

    canvas.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointermove", move);
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [gl]);

  // Frame update loop
  useFrame(() => {
    if (!islandRef.current) return;

    // Smooth auto-rotation towards target stage if requested
    if (targetRotation !== null && targetRotation !== undefined && !isRotating) {
      const current = islandRef.current.rotation.y;
      const diff = targetRotation - current;
      if (Math.abs(diff) > 0.005) {
        islandRef.current.rotation.y += diff * 0.08;
      } else {
        islandRef.current.rotation.y = targetRotation;
        if (setTargetRotation) setTargetRotation(null);
      }
    } else if (!isRotating) {
      // Damping natural inertia after drag
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.0005) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    }

    // Determine current stage based on normalized rotation
    const rotation = islandRef.current.rotation.y;
    const normalized = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // 3 Stages calibration:
    // Stage 1 (Intro/Graduation): ~4.7 rad (range: 4.15 -> 5.25)
    // Stage 2 (Hangout/Food): ~2.5 rad (range: 2.05 -> 2.95)
    // Stage 3 (Invitation): ~0.95 rad (range: 0.55 -> 1.45)
    if (normalized >= 4.15 && normalized <= 5.25) {
      if (currentStage !== 1) setCurrentStage(1);
    } else if (normalized >= 2.05 && normalized <= 2.95) {
      if (currentStage !== 2) setCurrentStage(2);
    } else if (normalized >= 0.55 && normalized <= 1.45) {
      if (currentStage !== 3) setCurrentStage(3);
    } else {
      // Keep last detected stage or let it hold smoothly
    }
  });

  return (
    <group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </group>
  );
}

useGLTF.preload(islandScene);

