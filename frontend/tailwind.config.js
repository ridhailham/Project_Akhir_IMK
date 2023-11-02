/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arges: ["AT Arges", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "cust-black": "#373435",
        "cust-red": "#BF4144",
        "cust-yellow": "#FFB003",
        "cust-light-yellow": "#FFC414",
        "cust-green": "#07998E",
        "cust-dark-green": "#015557",
      },
    },
  },
  plugins: [],
});
