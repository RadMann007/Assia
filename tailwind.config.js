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
        clementePdap: ['Clemente-pdap', 'sans-serif'],
        clementePdak: ['Clemente-pdak', 'sans-serif'],
        clementePdai: ['Clemente-pdai', 'sans-serif'],
        clementePdam: ['Clemente-pdam', 'sans-serif'],
        clementePdaq: ['Clemente-pdaq', 'sans-serif'],
        clementePdaj: ['Clemente-pdaj', 'sans-serif'],
        clementePdan: ['Clemente-pdan', 'sans-serif'],
        clementePdag: ['Clemente-pdag', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

