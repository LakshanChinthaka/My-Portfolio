/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  colors: {
    Cblack: "#051622",
  },

  theme: {
    extend: {},

    screens: {
      md: "835px",
    },
    blur: {
      sm: "50px",
    },
  },
  plugins: [],
};
