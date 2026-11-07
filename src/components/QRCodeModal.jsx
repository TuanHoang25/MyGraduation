import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, Copy, Check, Share2 } from "lucide-react";

export default function QRCodeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  // Clean public URL: remove /admin or ?admin so friends get the public view
  const getCleanPublicUrl = () => {
    if (typeof window === "undefined") return "https://graduation-roadmap.vercel.app";
    const cleanPath = window.location.pathname.replace(/\/admin\/?$/i, "") || "/";
    return `${window.location.origin}${cleanPath === "/" ? "" : cleanPath}`;
  };

  const [customUrl, setCustomUrl] = useState(getCleanPublicUrl());

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(customUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-white/60 flex flex-col items-center text-center z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-muted flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-sky-100 text-horizon flex items-center justify-center mb-3">
          <Share2 className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-extrabold text-ink">
          Mã QR Lễ Tốt Nghiệp 🎓
        </h3>
        <p className="text-xs text-muted mt-1 mb-4">
          Bạn bè quét mã này bằng Camera hoặc Zalo để mở ngay website Roadmap 3D của bạn!
        </p>

        {/* QR Box with decorative gradient border */}
        <div className="p-3 bg-white rounded-2xl border-2 border-dashed border-sky-300 shadow-card mb-4 flex items-center justify-center">
          <QRCodeSVG
            value={customUrl}
            size={180}
            level="H"
            includeMargin={true}
          />
        </div>

        {/* Custom URL Input for Vercel deployment preview */}
        <div className="w-full mb-3 text-left">
          <label className="text-[11px] font-bold text-muted uppercase tracking-wider block mb-1">
            Đường dẫn công khai cho bạn bè:
          </label>
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            className="w-full px-3 py-1.5 rounded-xl bg-paper border border-rule text-xs text-ink focus:outline-none focus:border-horizon font-mono"
            placeholder="https://ten-ban-tot-nghiep.vercel.app"
          />
        </div>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-horizon to-sky text-white font-bold text-xs flex items-center justify-center gap-2 shadow-card hover:shadow-lift transition-all active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              Đã sao chép link!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Sao chép đường dẫn
            </>
          )}
        </button>
      </div>
    </div>
  );
}
