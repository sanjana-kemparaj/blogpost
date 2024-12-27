/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        mulish: ["Mulish", "sans"],
      },
    },
    colors: {
      bluePrimary: "#2D7DD2",
    },
  },
  plugins: [],
};
