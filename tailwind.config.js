/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F7F9FC",
        horizon: "#0072FF",
        sky: {
          DEFAULT: "#00C6FF",
          50: "#EDF5FF",
          100: "#dcf0ff",
        },
        haze: "#64748B",
        rule: "#E2E8F0",
        signal: "#FF9F1C",
        festive: "#FF4E50",
        gold: "#F9D423",
        roof: "#B9553A",
        sand: { DEFAULT: "#F3F1E1", edge: "#DCDCB9" },
        muted: "#475569",
      },
      fontFamily: {
        display: ["'Be Vietnam Pro'", "system-ui", "-apple-system", "sans-serif"],
        body: ["'Be Vietnam Pro'", "'Work Sans'", "system-ui", "sans-serif"],
        mono: ["'B612 Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 72, 255, 0.15)",
        lift: "0 20px 45px -15px rgba(11, 18, 32, 0.25)",
        glow: "0 0 25px rgba(0, 198, 255, 0.4)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spinSlow: "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

