import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lift border border-white/60">
        <div className="w-12 h-12 border-4 border-horizon/30 border-t-horizon rounded-full animate-spin" />
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Đang tải không gian 3D...
        </p>
      </div>
    </Html>
  );
}

