/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clemente: ['Clemente', 'sans-serif'],
        clementeMini: ['Clemente-mini', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

