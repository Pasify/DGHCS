/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#070707",
        midBlack: "#333333",
        midBlack2: "#e6e6e6",
        background: "#f8f3f3",
        primary: "#a52a2a",
        secondary: "#e98888",
        accent: "#f65050",
      },
    },
  },
  plugins: [],
});
