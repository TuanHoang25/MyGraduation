import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import CanvasContainer from "./components/CanvasContainer";
import Header from "./components/Header";
import StageCard from "./components/StageCard";
import StageNav from "./components/StageNav";
import StageDetailModal from "./components/StageDetailModal";
import QRCodeModal from "./components/QRCodeModal";
import { GRADUATION_DATA } from "./constants/graduationData";

// New background music: Know My Name ft. True Damage - Worlds Anthem
import bgAudio from "./assets/theme.mp3";

// Hook to detect mobile screen width
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

// Check if current URL is in Admin mode (/admin or ?admin)
const checkIsAdmin = () => {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path === "/admin" || search.includes("admin") || hash.includes("admin");
};

export default function App() {
  const isMobile = useIsMobile();
  const [isAdmin] = useState(checkIsAdmin);

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [targetRotation, setTargetRotation] = useState(null);

  // Modals
  const [activeModalStage, setActiveModalStage] = useState(null);
  const [isQROpen, setIsQROpen] = useState(false);

  // Audio state & autoplay logic
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);
  const audioStartedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(bgAudio);
    audio.volume = 0.45;
    audio.loop = true;
    audioRef.current = audio;

    // Helper to start playback
    const startAudio = () => {
      if (!audioRef.current || audioStartedRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          setIsPlayingMusic(true);
          audioStartedRef.current = true;
          detachUserGestureListeners();
        })
        .catch(() => {
          // Autoplay policy prevented immediate playback before user gesture
        });
    };

    // 1. Try playing immediately on mount
    startAudio();

    // 2. Fallback: on the very first touch/click/drag (which friend will do immediately on opening), start audio seamlessly
    const handleGesture = () => {
      startAudio();
    };

    const detachUserGestureListeners = () => {
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("keydown", handleGesture);
    };

    window.addEventListener("pointerdown", handleGesture, { passive: true });
    window.addEventListener("touchstart", handleGesture, { passive: true });
    window.addEventListener("click", handleGesture, { passive: true });
    window.addEventListener("keydown", handleGesture, { passive: true });

    return () => {
      detachUserGestureListeners();
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlayingMusic(true);
          audioStartedRef.current = true;
        })
        .catch(() => {});
    }
  };

  // Festive Confetti trigger
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0072FF", "#00C6FF", "#FF4E50", "#F9D423", "#FFA07A"],
    });
  };

  // Stage selection with smooth rotation
  const handleSelectStage = (stageId) => {
    const found = GRADUATION_DATA.stages.find((s) => s.id === stageId);
    if (found) {
      setTargetRotation(found.angle);
      setCurrentStage(stageId);
    }
  };

  const handlePrevStage = () => {
    const prevId = currentStage > 1 ? currentStage - 1 : GRADUATION_DATA.stages.length;
    handleSelectStage(prevId);
  };

  const handleNextStage = () => {
    const nextId = currentStage < GRADUATION_DATA.stages.length ? currentStage + 1 : 1;
    handleSelectStage(nextId);
  };

  return (
    <main className="w-full h-[100dvh] min-h-[100vh] relative overflow-hidden bg-gradient-to-b from-[#b5e7ff] via-[#d7f1ff] to-[#f4faff] select-none">
      {/* Top Header */}
      <Header
        isPlayingMusic={isPlayingMusic}
        toggleMusic={toggleMusic}
        onOpenQR={() => setIsQROpen(true)}
        onTriggerConfetti={triggerConfetti}
        isAdmin={isAdmin}
      />

      {/* Floating Stage Info Card */}
      <div className="absolute top-16 sm:top-24 left-0 right-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full">
          <StageCard
            currentStage={currentStage}
            onOpenDetail={(stage) => setActiveModalStage(stage)}
          />
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <CanvasContainer
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        targetRotation={targetRotation}
        setTargetRotation={setTargetRotation}
        isMobile={isMobile}
      />

      {/* Bottom Stage Progress & Controls */}
      <StageNav
        currentStage={currentStage}
        onSelectStage={handleSelectStage}
        onPrevStage={handlePrevStage}
        onNextStage={handleNextStage}
      />

      {/* Detail Slide-up Modal */}
      {activeModalStage && (
        <StageDetailModal
          stage={activeModalStage}
          onClose={() => setActiveModalStage(null)}
          onTriggerConfetti={triggerConfetti}
        />
      )}

      {/* QR Code Modal - Only opened via Admin button */}
      <QRCodeModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
    </main>
  );
}
