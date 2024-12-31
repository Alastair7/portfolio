/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translatey(0px)" },
          "25%": { transform: "translatey(3px)" },
          "50%": { transform: "translatey(5px)" },
          "75%": { transform: "translatey(2px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        floating: "floating 3.3s linear infinite",
      },
    },
  },
  plugins: [],
};
