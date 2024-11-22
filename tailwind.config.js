/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/src/assets/cert.jpg')",
        "bg-none": "none",
      },
      screens: {
        mo: "320px",
      },
    },
  },
  plugins: [],
}

