/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          // primary: "#ffb400",
          // primary: "#eb4a4c",
          // primary: "#7963E0",
          // primary: "#5ac24e",
          primary: "#ffa329",
          secondary: "#1a202c",
        },
        dark: {
          primary: "#1a202c",
          // secondary: "#ffb400",
          // secondary: "#eb4a4c",
          // secondary: "#7963E0",
          // secondary: "#5ac24e",
          secondary: "#ffa329",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
