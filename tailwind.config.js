/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NAILGRAY: "#969293",
        NAILPINK: "#FB786B",
      },
    },
  },
  plugins: [],
};
