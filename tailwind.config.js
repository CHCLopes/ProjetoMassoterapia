/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03876a',
        secondary: '#8dd3c7',
        accent: '#03a678',
        light: '#f1f8f6',
        dark: '#2c3e3a',
      }
    },
  },
  plugins: [],
}