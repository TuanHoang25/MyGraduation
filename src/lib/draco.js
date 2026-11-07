import { useGLTF } from "@react-three/drei";

/**
 * Configure local Draco decoder so 3D models load fast and offline/locally
 * without third-party CDN dependency.
 */
useGLTF.setDecoderPath("/draco/");

