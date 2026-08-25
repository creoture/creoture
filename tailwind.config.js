/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#09090B",
          card: "#111111",
          border: "#27272A",
        },
        brand: {
          orange: {
            DEFAULT: "#F1701C",
            light: "#FF8A3D",
            dark: "#C4560F",
          },
          blue: {
            DEFAULT: "#004AAD",
            light: "#196FB6",
            dark: "#00306E",
          },
        },
        term: {
          green: "#3ECF8E",
          amber: "#F5B93E",
          red: "#F1503D",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        code: ["Fira Code", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #F1701C 0%, #004AAD 100%)",
        "glow-orange": "radial-gradient(circle, rgba(241,112,28,0.15) 0%, rgba(241,112,28,0) 70%)",
        "glow-blue": "radial-gradient(circle, rgba(0,74,173,0.18) 0%, rgba(0,74,173,0) 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
