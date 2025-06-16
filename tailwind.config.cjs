/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // сканируем все файлы
  ],
  theme: {
    extend: {
      // здесь можно добавить свои цвета, шрифты, эффекты
      // например:
      // colors: {
      //   primary: '#5E5CE6',
      //   secondary: '#FF6F61',
      // },
    },
  },
  plugins: [],
}
