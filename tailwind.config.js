/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#2f2f2f',
        selectColor: '#434343',
        cardColor: '#777676',
      },
    },
  },
  plugins: [],
}

