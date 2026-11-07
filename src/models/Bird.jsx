/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    const clip = actions?.["Take 001"] ?? Object.values(actions ?? {})[0];
    clip?.play();
    return () => clip?.stop();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    const bird = birdRef.current;
    if (!bird) return;

    // Up and down oscillation
    bird.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.3 + 2.2;

    // Turn around when reaching boundaries
    if (bird.position.x > camera.position.x + 12) {
      bird.rotation.y = Math.PI;
    } else if (bird.position.x < camera.position.x - 12) {
      bird.rotation.y = 0;
    }

    if (bird.rotation.y === 0) {
      bird.position.x += 0.012;
      bird.position.z -= 0.012;
    } else {
      bird.position.x -= 0.012;
      bird.position.z += 0.012;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2.5, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(birdScene);

