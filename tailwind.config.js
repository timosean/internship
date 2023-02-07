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
        INPUT_BG: "#F8F7F7",
      },
    },
  },
  plugins: [],
};
