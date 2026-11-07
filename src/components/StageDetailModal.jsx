import { useState, useEffect } from "react";
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  Send,
  Heart,
  CheckCircle,
  Copy,
  Share2,
} from "lucide-react";
import { GRADUATION_DATA } from "../constants/graduationData";

export default function StageDetailModal({ stage, onClose, onTriggerConfetti }) {
  const { graduate } = GRADUATION_DATA;
  const [activeTab, setActiveTab] = useState(0);

  // Wish form state (stored in localStorage)
  const [senderName, setSenderName] = useState("");
  const [wishText, setWishText] = useState("");
  const [wishes, setWishes] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("graduation_wishes");
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch {
      // fallback
    }
  }, []);

  if (!stage) return null;

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!senderName.trim() || !wishText.trim()) return;

    const newWish = {
      name: senderName.trim(),
      text: wishText.trim(),
      time: new Date().toLocaleDateString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
      }),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("graduation_wishes", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setWishText("");
    setSentSuccess(true);
    if (onTriggerConfetti) onTriggerConfetti();
    setTimeout(() => setSentSuccess(false), 3000);
  };

  const copyWishToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Helper for Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const event = stage.modalContent?.calendarEvent;
    if (!event) return "#";
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = `&text=${encodeURIComponent(event.title)}`;
    const dates = `&dates=${event.startDate}/${event.endDate}`;
    const details = `&details=${encodeURIComponent(event.details)}`;
    const location = `&location=${encodeURIComponent(event.location)}`;
    return `${base}${text}${dates}${details}${location}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal / Bottom Sheet Box */}
      <div className="relative w-full sm:max-w-2xl max-h-[90dvh] sm:max-h-[85vh] bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-white/60 flex flex-col z-10 overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Mobile Drag Indicator Bar */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2 sm:hidden flex-shrink-0" />

        {/* Top Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 sm:px-6 py-3.5 sm:py-4 border-b border-rule flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-sky-100 text-horizon uppercase tracking-wide">
              {stage.badge}
            </span>
            <h3 className="text-sm sm:text-lg font-bold text-ink truncate max-w-[210px] sm:max-w-md">
              {stage.modalContent?.headline || stage.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-muted hover:text-ink flex items-center justify-center transition-all flex-shrink-0"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overscroll-contain px-4 sm:px-8 py-5 sm:py-6 space-y-6 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
          {/* ================= STAGE 1: CHÚC MỪNG LỄ TỐT NGHIỆP ================= */}
          {stage.id === 1 && (
            <div className="space-y-6">
              {/* Graduate Profile Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-100 flex flex-col sm:flex-row items-center gap-5">
                <img
                  src={graduate.avatar}
                  alt={graduate.fullName}
                  className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl object-cover object-top shadow-card ring-4 ring-white flex-shrink-0"
                />
                <div className="text-center sm:text-left flex-1">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 mb-1">
                    {graduate.honor}
                  </span>
                  <h4 className="text-xl font-extrabold text-ink">
                    {graduate.fullName}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-horizon mt-0.5">
                    {graduate.degree}
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    {graduate.university}
                  </p>
                  <p className="italic text-xs text-ink/75 mt-2 bg-white/70 p-2 rounded-xl border border-rule/50">
                    {graduate.quote}
                  </p>
                </div>
              </div>

              {/* Heartfelt Message */}
              <div className="bg-paper p-5 rounded-2xl border border-rule">
                <h5 className="font-bold text-sm text-ink mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-festive" />
                  Tâm Thư Tốt Nghiệp
                </h5>
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                  {stage.modalContent.message}
                </p>
              </div>

              {/* Milestones (4 năm) */}
              <div>
                <h5 className="font-bold text-sm text-ink mb-3">
                  Cột Mốc 4 Năm Đại Học 🎓
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.modalContent.milestones.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white border border-rule hover:border-horizon/50 hover:shadow-card transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xl">{m.icon}</span>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-horizon">
                            {m.year}
                          </span>
                          <h6 className="text-xs font-bold text-ink">
                            {m.title}
                          </h6>
                        </div>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gratitude */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <h5 className="text-xs font-bold text-amber-900 mb-2">
                  Lời Tri Ân Sâu Sắc ❤️
                </h5>
                <ul className="space-y-1.5">
                  {stage.modalContent.gratitudeList.map((g, i) => (
                    <li key={i} className="text-xs text-amber-800 leading-relaxed">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fireworks button */}
              <div className="text-center pt-2">
                <button
                  onClick={onTriggerConfetti}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-festive to-[#ff7b54] text-white text-xs sm:text-sm font-bold shadow-card hover:shadow-lift transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  Bắn pháo hoa chúc mừng! 🎉
                </button>
              </div>
            </div>
          )}

          {/* ================= STAGE 2: GỢI Ý ĐỊA ĐIỂM ĂN CHƠI ================= */}
          {stage.id === 2 && (
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-muted">
                {stage.modalContent.subheadline}
              </p>

              {/* Category tabs */}
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {stage.modalContent.categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === idx
                        ? "bg-horizon text-white shadow-sm"
                        : "bg-gray-100 text-muted hover:text-ink"
                    }`}
                  >
                    Tăng {idx + 1}
                  </button>
                ))}
              </div>

              {/* Selected category items */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-horizon">
                  {stage.modalContent.categories[activeTab]?.categoryName}
                </h5>

                <div className="space-y-3">
                  {stage.modalContent.categories[activeTab]?.items.map(
                    (item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white border border-rule hover:border-horizon/40 hover:shadow-card transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                          <div>
                            <span className="text-[10px] font-semibold text-signal uppercase tracking-wider">
                              {item.type}
                            </span>
                            <h6 className="text-sm font-bold text-ink">
                              {item.name}
                            </h6>
                          </div>
                          <span className="inline-block text-xs font-bold text-horizon bg-sky-50 px-2.5 py-1 rounded-lg self-start">
                            {item.price}
                          </span>
                        </div>

                        <div className="space-y-1 mb-3 text-xs text-muted">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-horizon flex-shrink-0" />
                            <span>{item.address} ({item.distance})</span>
                          </div>
                        </div>

                        <p className="text-xs text-ink/80 bg-paper p-2.5 rounded-xl mb-3">
                          💡 <span className="font-medium">Điểm nổi bật:</span> {item.highlight}
                        </p>

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            item.mapQuery
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-sky-50 hover:text-horizon text-xs font-semibold text-ink transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Mở Google Maps chỉ đường</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Tips */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <h5 className="text-xs font-bold text-horizon mb-2">
                  Bí Kíp Ăn Chơi Ngày Tốt Nghiệp 🌟
                </h5>
                <ul className="space-y-1">
                  {stage.modalContent.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-ink/80">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ================= STAGE 3: THIỆP MỜI BẠN BÈ & KẾT THÚC ================= */}
          {stage.id === 3 && (
            <div className="space-y-6">
              {/* Formal Invitation Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-amber-50 border-2 border-sky-100 shadow-sm text-center space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-horizon text-white tracking-widest uppercase">
                  THIỆP MỜI THÂN MẬT
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-ink">
                  Lễ Tốt Nghiệp Cử Nhân: {graduate.fullName}
                </h4>
                <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                  {stage.modalContent.invitationText}
                </p>

                {/* Important Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                  <div className="p-3 bg-white rounded-xl border border-rule flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-horizon flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-muted">Thời gian</span>
                      <p className="text-xs font-bold text-ink">{graduate.graduationDate}</p>
                      <p className="text-xs text-muted">{graduate.graduationTime}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-rule flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-festive flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-muted">Địa điểm</span>
                      <p className="text-xs font-bold text-ink">{graduate.ceremonyHall}</p>
                      <p className="text-xs text-muted line-clamp-1">{graduate.ceremonyAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons: Calendar & Map */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-horizon text-white text-xs font-bold shadow-sm hover:bg-[#005cd6] transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Thêm vào Google Calendar
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      graduate.ceremonyAddress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink text-xs font-bold transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-festive" />
                    Chỉ đường đến trường
                  </a>
                </div>
              </div>

              {/* Timeline Trong Ngày */}
              <div>
                <h5 className="font-bold text-sm text-ink mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-horizon" />
                  Lịch Trình Buổi Lễ & Chụp Hình
                </h5>
                <div className="space-y-2.5">
                  {stage.modalContent.timeline.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-paper border border-rule flex items-start gap-3"
                    >
                      <span className="px-2 py-1 rounded-lg bg-sky-100 text-horizon font-mono text-[11px] font-bold whitespace-nowrap">
                        {item.time}
                      </span>
                      <div>
                        <h6 className="text-xs font-bold text-ink">{item.event}</h6>
                        <p className="text-xs text-muted">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dress Code Note */}
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-muted">
                👗 <span className="font-bold text-ink">Gợi ý trang phục (Dresscode):</span> {stage.modalContent.dresscode}
              </div>

              {/* Guestbook / Send Wishes Form */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-rule space-y-3">
                <h5 className="font-bold text-sm text-ink flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-festive" />
                  Gửi Lời Chúc Mừng Đến Cử Nhân 🎓
                </h5>

                <form onSubmit={handleSendWish} className="space-y-2.5">
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Tên của bạn hoặc biệt danh..."
                    className="w-full px-3.5 py-2 rounded-xl bg-paper border border-rule text-xs text-ink placeholder:text-muted/60 focus:outline-none focus:border-horizon transition-all"
                    required
                  />
                  <textarea
                    rows={2}
                    value={wishText}
                    onChange={(e) => setWishText(e.target.value)}
                    placeholder="Nhập lời chúc tốt nghiệp thật ý nghĩa..."
                    className="w-full px-3.5 py-2 rounded-xl bg-paper border border-rule text-xs text-ink placeholder:text-muted/60 focus:outline-none focus:border-horizon transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-horizon to-sky text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow-card active:scale-98 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Gửi lời chúc ngay!
                  </button>
                </form>

                {sentSuccess && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Đã gửi lời chúc thành công! Cảm ơn bạn rất nhiều!
                  </div>
                )}

                {/* Display previous wishes */}
                {wishes.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] font-bold uppercase text-muted tracking-wide">
                      Lời chúc từ bạn bè ({wishes.length})
                    </p>
                    <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
                      {wishes.map((w, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-paper border border-rule text-xs flex items-start justify-between gap-2"
                        >
                          <div>
                            <span className="font-bold text-ink">{w.name}: </span>
                            <span className="text-ink/80">{w.text}</span>
                            <p className="text-[10px] text-muted mt-0.5">{w.time}</p>
                          </div>
                          <button
                            onClick={() => copyWishToClipboard(`${w.name}: ${w.text}`, idx)}
                            title="Sao chép lời chúc"
                            className="p-1 rounded text-muted hover:text-horizon transition-colors"
                          >
                            {copiedIndex === idx ? (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

