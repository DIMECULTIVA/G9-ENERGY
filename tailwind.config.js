/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D90429",
          black: "#0A0A0A",
          white: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}
