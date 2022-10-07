/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "primary",
        secondary: "secondary",
      },
      colors: {
        "semi-gray": "#0a2540",
      },
    },
  },
  plugins: [],
};
