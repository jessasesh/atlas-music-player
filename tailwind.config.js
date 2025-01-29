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
        background: '#f4f7fa',
        textPrimary: '#2d3748',

        darkBackground: '#1a202c',
        darkTextPrimary: '#e2e8f0',
        highlight: '#e2e8f0',
      },
    },
  },
  plugins: [],
}