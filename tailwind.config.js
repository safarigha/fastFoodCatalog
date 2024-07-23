/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        IranYekan: ["Iranyekan", "sans-serif"],
      },

    },
  },
  plugins: [],
};
