/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  theme: {
    extend: {
      boxShadow: {
        l: "0 3px 10px 0.1px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-200px*8))" },
        },
        smallslider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-75px*8))" },
        },
      },
      animation: {
        // slider: "slider 10s infinite linear",
        slider: "slider 10s linear infinite",
        smallslider: "smallslider 8s linear infinite",
      },
      borderRadius: {
        blob: "33% 67% 68% 32% / 26% 45% 55% 74% ",
      },
    },
  },
  plugins: [],
};
