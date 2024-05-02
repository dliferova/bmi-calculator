/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
        borders: "#D8E2E7",
      },
    },
  },
  plugins: [
    require("tailwindcss-font-inter")({
      baseFontSize: 16,
    }),
  ],
}
