/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#7B9E4E",
        second: "#5d5dde",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
