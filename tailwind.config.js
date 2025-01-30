/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background: "#f4f7fa",
        textPrimary: "#2d3748",
        cardBg: "#ffffff",
        highlight: "#e2e8f0",
        darkBackground: "#1a202c",
        darkTextPrimary: "#e2e8f0",
        darkCardBg: "#2d3748",
        darkHighlight: "#4a5568",
        primary: "#6B8E23",
      },
    },
  },
  plugins: [],
}