import { GraduationCap, Volume2, VolumeX, QrCode, Sparkles, ShieldCheck } from "lucide-react";
import { GRADUATION_DATA } from "../constants/graduationData";

export default function Header({
  isPlayingMusic,
  toggleMusic,
  onOpenQR,
  onTriggerConfetti,
  isAdmin,
}) {
  const { graduate } = GRADUATION_DATA;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-3 sm:px-6 py-3 flex items-center justify-between pointer-events-none">
      {/* Graduate Badge / Info */}
      <div className="pointer-events-auto flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-full shadow-card border border-white/80 transition-all hover:shadow-lift">
        {graduate.avatar ? (
          <img
            src={graduate.avatar}
            alt={graduate.fullName}
            className="w-8 h-8 rounded-full object-cover object-top ring-2 ring-horizon/30 shadow-sm flex-shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-horizon to-sky flex items-center justify-center text-white shadow-sm flex-shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-bold text-ink leading-tight flex items-center gap-1">
            {graduate.fullName}
            <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-sky-100 text-horizon font-semibold rounded-full">
              {graduate.honor}
            </span>
            {isAdmin && (
              <span className="px-1.5 py-0.2 text-[9px] bg-amber-100 text-amber-800 font-bold rounded-full border border-amber-200">
                Admin
              </span>
            )}
          </span>
          <span className="text-[10px] sm:text-xs text-muted leading-tight truncate max-w-[140px] sm:max-w-[220px]">
            {graduate.degree} · HUTECH
          </span>
        </div>
      </div>

      {/* Control Actions */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Confetti celebration button */}
        <button
          onClick={onTriggerConfetti}
          title="Bắn pháo hoa chúc mừng!"
          aria-label="Bắn pháo hoa"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-festive hover:text-festive/80 flex items-center justify-center shadow-card border border-white/80 transition-all hover:scale-105 active:scale-95 group"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>

        {/* QR Code Modal trigger - ONLY VISIBLE ON /admin */}
        {isAdmin && (
          <button
            onClick={onOpenQR}
            title="Mã QR chia sẻ (Chỉ hiển thị cho Admin)"
            aria-label="Mã QR"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-horizon hover:text-horizon/80 flex items-center justify-center shadow-card border border-white/80 transition-all hover:scale-105 active:scale-95 relative"
          >
            <QrCode className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-horizon rounded-full border-2 border-white animate-pulse" />
          </button>
        )}

        {/* Music Toggle */}
        <button
          onClick={toggleMusic}
          title={isPlayingMusic ? "Tắt nhạc nền" : "Bật nhạc nền"}
          aria-label="Bật/Tắt nhạc nền"
          className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center shadow-card border transition-all hover:scale-105 active:scale-95 ${
            isPlayingMusic
              ? "bg-horizon text-white border-horizon/30 animate-pulseSlow"
              : "bg-white/90 text-muted border-white/80"
          }`}
        >
          {isPlayingMusic ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
}
