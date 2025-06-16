# Richman Studio

Профессиональная веб-студия: создание лендингов, корпоративных сайтов, интернет-магазинов, PWA и LMS-платформ «под ключ» за 24 часа.

---

## 📦 Структура проекта
```
richman-studio/
├── public/                   # статичные файлы
│   ├── favicon.png
│   └── vite.svg
├── src/
│   ├── assets/               # картинки, видео, шрифты
│   ├── components/           # React-компоненты
│   │   ├── About.tsx
│   │   ├── Calculator.tsx
│   │   ├── Contacts.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PrivacyModal.tsx
│   │   ├── Process.tsx
│   │   └── Services.tsx
│   ├── hooks/                # кастомные React-хуки
│   │   └── useWindowSize.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── routes/
│   │   └── AppRouter.tsx
│   ├── utils/                # утилиты
│   ├── App.tsx
│   ├── index.tsx
│   └── vite-env.d.ts
├── tailwind.config.js        # конфиг TailwindCSS
├── vite.config.ts            # конфиг Vite
├── package.json
├── tsconfig.json
└── README.md                 # вы тут
```

## 🚀 Быстрый старт
```bash
git clone https://github.com/username/richman-studio.git
cd richman-studio
npm install # или yarn install
npm run dev # или yarn dev
```

## 🛠 Скрипты
```bash
npm run dev       # запустить Vite в режиме разработки
npm run build     # собрать production-версию в папку dist/
npm run preview   # локальный просмотр production-сборки
npm run deploy    # собрать и запушить dist/ на ветку gh-pages
```

## 🔧 Настройки TailwindCSS
```js
// tailwind.config.js
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { /* ... */ },
  },
  plugins: [],
  darkMode: 'class',
}
```

## 📑 Настройки Vite
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: import.meta.env.PROD ? '/richman-studio/' : '/',
  plugins: [react()],
});
```

## ✨ Особенности
- React + TypeScript
- Vite — супер-быстрая сборка
- TailwindCSS + кастомные анимации
- Framer Motion для плавных эффектов
- Готов к деплою на GitHub Pages (`npm run deploy`)
- Адаптивность под мобильные и десктоп

## 📄 Лицензия
MIT © Richman Studio
