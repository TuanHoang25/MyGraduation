import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { GRADUATION_DATA } from "../constants/graduationData";

export default function StageNav({
  currentStage,
  onSelectStage,
  onPrevStage,
  onNextStage,
}) {
  const { stages } = GRADUATION_DATA;

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] sm:bottom-6 left-0 right-0 z-20 flex flex-col items-center pointer-events-none px-3 sm:px-4">
      {/* Navigation container */}
      <div className="pointer-events-auto bg-white/90 backdrop-blur-lg px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-lift border border-white/80 flex items-center gap-1 sm:gap-3 transition-all max-w-[96vw] sm:max-w-md">
        {/* Prev Button */}
        <button
          onClick={onPrevStage}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink flex items-center justify-center transition-all active:scale-95 flex-shrink-0"
          title="Giai đoạn trước"
          aria-label="Giai đoạn trước"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Stage Tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          {stages.map((stage) => {
            const isActive = currentStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => onSelectStage(stage.id)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-horizon to-[#00a6ff] text-white shadow-md scale-102"
                    : "text-muted hover:text-ink hover:bg-gray-100/70"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    isActive ? "bg-white animate-ping" : "bg-muted/40"
                  }`}
                />
                <span className="whitespace-nowrap">
                  {stage.id === 1 && "Chúc mừng"}
                  {stage.id === 2 && "Ăn chơi"}
                  {stage.id === 3 && "Thiệp mời"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={onNextStage}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink flex items-center justify-center transition-all active:scale-95 flex-shrink-0"
          title="Giai đoạn tiếp theo"
          aria-label="Giai đoạn tiếp theo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Touch drag indicator for mobile friends */}
      <div className="mt-1.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-muted/80 bg-white/60 backdrop-blur-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm pointer-events-none">
        <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-horizon animate-spinSlow" />
        <span>Vuốt xoay hòn đảo 3D hoặc bấm mốc giai đoạn</span>
      </div>
    </div>
  );
}

