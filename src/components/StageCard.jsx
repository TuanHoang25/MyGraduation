import { ArrowRight, Sparkles, Utensils, MailCheck } from "lucide-react";
import { GRADUATION_DATA } from "../constants/graduationData";

export default function StageCard({ currentStage, onOpenDetail }) {
  const activeStage =
    GRADUATION_DATA.stages.find((s) => s.id === (currentStage || 1)) ||
    GRADUATION_DATA.stages[0];

  const getStageIcon = (id) => {
    switch (id) {
      case 1:
        return <Sparkles className="w-4 h-4 text-festive" />;
      case 2:
        return <Utensils className="w-4 h-4 text-signal" />;
      case 3:
        return <MailCheck className="w-4 h-4 text-horizon" />;
      default:
        return <Sparkles className="w-4 h-4 text-horizon" />;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 transition-all duration-500 ease-out">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-lift border border-white/80 overflow-hidden group">
        {/* Decorative corner glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-horizon/20 to-sky/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top meta info */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-[11px] font-bold text-horizon tracking-wide uppercase">
            {getStageIcon(activeStage.id)}
            <span>{activeStage.badge} · 3D Roadmap</span>
          </div>
          <span className="text-[11px] font-mono text-muted/70">
            {activeStage.id} / {GRADUATION_DATA.stages.length}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="mb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-horizon">
            {activeStage.tagline}
          </p>
          <h2 className="text-lg sm:text-2xl font-extrabold text-ink leading-snug mt-0.5">
            {activeStage.title}
          </h2>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 mb-4">
          {activeStage.summary}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => onOpenDetail(activeStage)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-horizon to-[#0091ff] hover:from-[#005cd6] hover:to-horizon text-white font-semibold text-xs sm:text-sm shadow-card hover:shadow-lift transition-all duration-300 active:scale-95 group/btn"
        >
          <span>{activeStage.cta}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

