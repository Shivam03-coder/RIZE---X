/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Noto: ["Noto Sans Lao Looped", "sans-serif"],
      },
      colors: {
        Green: "rgb(148, 255, 61)",
        Dark: "#191919",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
