/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  important: true,

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
