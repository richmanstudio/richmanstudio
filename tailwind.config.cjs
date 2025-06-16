// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Указываем, где искать классы Tailwind в проекте
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Дополняем анимации нашими keyframes
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // «бегущая строка» — сдвигаем влево на 50% за 20 секунд, линейно, бесконечно
        marquee: 'marquee 20s linear infinite',
      },
      // Если нужно, можно задать кастомные цвета, шрифты и пр. здесь:
      colors: {
        'primary': '#8b5cf6',
        'primary-dark': '#6b21a8',
        'bg-start': '#f3e8ff',
        'bg-end': '#dbeafe',
        'text-main': '#1f2937',
        'text-muted': '#6b7280',
      },
      boxShadow: {
        md: '0 4px 12px rgba(0,0,0,0.05)',
        lg: '0 10px 25px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        lg: '1rem',
      },
    },
  },
  plugins: [],
  // Если хотите поддерживать тёмную тему по классу:
  darkMode: 'class',
}
