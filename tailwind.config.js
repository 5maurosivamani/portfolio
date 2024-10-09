/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffb400",
          secondary: "#1a202c",
        },
        dark: {
          primary: "#1a202c",
          secondary: "#ffb400",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
