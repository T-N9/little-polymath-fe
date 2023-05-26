/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#009900",
      //   secondary: "#006D77",
      //   light: "#21E6C1",
      //   dark: "#2F4858",
      // },
      fontFamily: {
        primary: ["OpenSans", "sans-serif"],
        heading: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
