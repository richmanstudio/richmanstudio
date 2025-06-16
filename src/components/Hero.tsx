// src/components/Hero.tsx
import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Editor from '@monaco-editor/react'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

// Debounce utility
function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  ms: number
) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

// 24-hour countdown component
const Countdown: React.FC = () => {
  const [remaining, setRemaining] = useState(24 * 3600 * 1000)
  useEffect(() => {
    const deadline = Date.now() + 24 * 3600 * 1000
    const tick = () => {
      const diff = Math.max(deadline - Date.now(), 0)
      setRemaining(diff)
      if (diff === 0) clearInterval(interval)
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])
  const h = Math.floor(remaining / 3600000)
  const m = Math.floor((remaining % 3600000) / 60000)
  const s = Math.floor((remaining % 60000) / 1000)
  const fmt = (n: number) => n.toString().padStart(2, '0')
  return (
    <motion.div
      className="flex space-x-6 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {[
        { label: 'Часов', value: fmt(h) },
        { label: 'Минут', value: fmt(m) },
        { label: 'Секунд', value: fmt(s) },
      ].map(({ label, value }) => (
        <div key={label} className="text-center">
          <span className="block text-4xl font-bold text-purple-600">{value}</span>
          <span className="text-gray-700">{label}</span>
        </div>
      ))}
    </motion.div>
  )
}

// Initial mini-landing HTML/CSS with hidden scrollbars CSS injected
const initialCode = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Richman Studio — Лендинг</title>
  <style>
    /* Тема и переменные */
    :root {
      --color-primary: #8b5cf6;
      --color-primary-dark: #6b21a8;
      --color-bg-start: #f3e8ff;
      --color-bg-end: #dbeafe;
      --text-main: #1f2937;
      --text-muted: #6b7280;
      --radius-lg: 1rem;
      --shadow-md: 0 4px 12px rgba(0,0,0,0.05);
      --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
      --transition: 0.25s ease-in-out;
    }

    /* Сброс */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      scroll-behavior: smooth;
      font-family: 'Inter', sans-serif;
    }
    body {
      background: linear-gradient(135deg, var(--color-bg-start), var(--color-bg-end));
      color: var(--text-main);
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { text-decoration: none; color: inherit; }

    /* Контейнер */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Хедер */
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      backdrop-filter: blur(12px);
      background: rgba(255,255,255,0.85);
      box-shadow: var(--shadow-md);
      z-index: 1000;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(to right, var(--color-primary), #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    /* Навигация */
    nav {
      display: flex;
      gap: 1.5rem;
    }
    nav a {
      position: relative;
      font-weight: 500;
      color: var(--text-muted);
      transition: color var(--transition);
    }
    nav a:hover {
      color: var(--color-primary-dark);
    }
    nav a::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0;
      width: 0; height: 2px;
      background: var(--color-primary-dark);
      transition: width var(--transition);
    }
    nav a:hover::after {
      width: 100%;
    }

    /* Гамбургер */
    #nav-toggle {
      display: none;
    }
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }
    .hamburger span {
      width: 25px;
      height: 3px;
      background: var(--text-main);
      transition: all var(--transition);
    }

    /* Hero */
    .hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding-top: 4rem;
      text-align: center;
    }
    .hero h1 {
      font-size: 2.75rem;
      font-weight: 900;
      color: var(--text-main);
      line-height: 1.2;
      animation: fadeInUp 0.8s ease both;
    }
    .hero h1 .highlight {
      display: block;
      color: var(--color-primary);
      font-size: 3.5rem;
      margin-top: 0.25rem;
      animation: popIn 0.8s 0.5s ease both;
    }
    .hero p {
      max-width: 600px;
      margin: 1rem 0 2rem;
      color: var(--text-muted);
      font-size: 1.125rem;
      animation: fadeIn 1s 1s ease both;
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1.75rem;
      background: var(--color-primary);
      color: #fff;
      font-weight: 600;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      transition: background var(--transition), transform var(--transition);
      animation: fadeIn 1s 1.5s ease both;
    }
    .btn-primary:hover {
      background: var(--color-primary-dark);
      transform: translateY(-3px);
    }

    /* Анимации */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes popIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }

    /* Features */
    .features {
      padding: 4rem 0;
      background: #fff;
    }
    .features h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: var(--text-main);
      animation: fadeIn 1s ease both;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
      gap: 2rem;
      animation: fadeIn 1s 0.5s ease both;
    }
    .feature-card {
      background: rgba(255,255,255,0.8);
      backdrop-filter: blur(6px);
      border-radius: var(--radius-lg);
      padding: 2rem;
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
    .feature-card .icon {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    .feature-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--text-main);
    }
    .feature-card p {
      color: var(--text-muted);
    }

    /* Footer */
    footer {
      background: #f9fafb;
      text-align: center;
      padding: 2rem 0;
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    footer a {
      color: var(--color-primary);
      transition: color var(--transition);
    }
    footer a:hover {
      color: var(--color-primary-dark);
    }

    /* Адаптация: до 1024px */
    @media (max-width: 1024px) {
      .hero h1 { font-size: 2.5rem; }
      .hero h1 .highlight { font-size: 3rem; }
    }

    /* Адаптация: до 768px */
    @media (max-width: 768px) {
      .header-inner { justify-content: space-between; }
      nav { display: none; }
      .hamburger { display: flex; }
      #nav-toggle:checked + nav { 
        display: flex; 
        position: absolute; top: 4rem; left: 0; right: 0;
        flex-direction: column; background: rgba(255,255,255,0.95);
        box-shadow: var(--shadow-md);
        padding: 1rem 0;
      }
      nav a { margin: 0.5rem 0; text-align: center; }
      .hero h1 { font-size: 2rem; }
      .hero h1 .highlight { font-size: 2.5rem; }
      .btn-primary { width: 100%; justify-content: center; }
      .features { padding: 2rem 0; }
      .features h2 { font-size: 1.75rem; }
      .grid { gap: 1.5rem; }
    }

    /* Адаптация: до 480px */
    @media (max-width: 480px) {
      .container { width: 95%; }
      .hero p { font-size: 1rem; }
      .feature-card { padding: 1.5rem; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="container header-inner">
      <div class="logo">Richman Studio</div>
      <!-- Гамбургер для мобильных -->
      <label for="nav-toggle" class="hamburger" aria-label="Открыть меню">
        <span></span><span></span><span></span>
      </label>
      <input type="checkbox" id="nav-toggle" hidden />
      <nav>
        <a href="#hero">Главная</a>
        <a href="#features">Особенности</a>
        <a href="#contact">Контакты</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero container">
    <h1>
      Создаём сайты<br/>
      <span class="highlight">за 24 часа</span>
    </h1>
    <p>
      Профессиональные решения «под ключ»: адаптивная верстка, высокая скорость и
      современный дизайн. Ваш идеальный сайт — в кратчайшие сроки.
    </p>
    <button class="btn-primary">Начать сейчас →</button>
  </section>

  <!-- Features Section -->
  <section id="features" class="features container">
    <h2>Наши преимущества</h2>
    <div class="grid">
      <div class="feature-card">
        <div class="icon">🎨</div>
        <h3>Индивидуальный дизайн</h3>
        <p>Уникальные макеты, отражающие характер вашего бренда.</p>
      </div>
      <div class="feature-card">
        <div class="icon">⚡</div>
        <h3>Максимальная скорость</h3>
        <p>Оптимизация под лучшие показатели Core Web Vitals.</p>
      </div>
      <div class="feature-card">
        <div class="icon">🔒</div>
        <h3>Надёжность</h3>
        <p>Современные стандарты безопасности и кросс-браузерное тестирование.</p>
      </div>
      <div class="feature-card">
        <div class="icon">📱</div>
        <h3>Полная адаптивность</h3>
        <p>Идеальный вид и функционал на любых устройствах.</p>
      </div>
    </div>
  </section>

  <!-- Footer / Contact -->
  <footer id="contact">
    <p>© 2025 Richman Studio. Все права защищены.</p>
    <p>
      <a href="mailto:info@richmanstudio.ru">info@richmanstudio.ru</a>
    </p>
  </footer>

</body>
</html>

`.trim()

export const Hero: React.FC = () => {
  const [code, setCode] = useState(initialCode)
  const [srcDoc, setSrcDoc] = useState(initialCode)

  // prepend scrollbar-hiding CSS only once
  const prefix = `<!DOCTYPE html><html><head><style>
    html { -ms-overflow-style: none; scrollbar-width: none; }
    ::-webkit-scrollbar { display: none; }
  </style></head><body>`
  const suffix = `</body></html>`

  const updatePreview = useCallback(
    debounce((newCode: string) => {
      setSrcDoc(`${prefix}${newCode.replace(/<!DOCTYPE html>[\\s\\S]*?<body[^>]*>/, '')}${suffix}`)
    }, 300),
    []
  )

  const onEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
      updatePreview(value)
    }
  }

  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 px-4 pt-16 pb-8"
    >
      {/* Background blurred circles */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 opacity-20 rounded-full filter blur-3xl" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-4 max-w-3xl"
      >
        Запускаем ваш сайт
        <motion.span
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="block text-purple-600"
        >
          всего за 24 часа
        </motion.span>
      </motion.h1>

      {/* Countdown */}
      <Countdown />

      {/* Laptop mockup */}
      <motion.div
        className="relative w-full max-w-4xl aspect-[16/9] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Top bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-gray-300 rounded-t-lg flex items-center justify-center space-x-2">
          <span className="w-3 h-3 bg-gray-500 rounded-full" />
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
        </div>
        {/* Screen */}
        <div className="absolute inset-0 top-6 bg-white/50 backdrop-blur-md border-4 border-gray-200 rounded-2xl overflow-hidden shadow-2xl flex">
          {/* Editor pane */}
          <div className="w-1/2 border-r border-gray-300">
            <Editor
              height="100%"
              defaultLanguage="html"
              defaultValue={initialCode}
              value={code}
              onChange={onEditorChange}
              options={{
                minimap: { enabled: false },
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden',
                  verticalScrollbarSize: 0,
                  horizontalScrollbarSize: 0,
                },
                fontSize: 14,
                scrollBeyondLastLine: false,
              }}
            />
          </div>
          {/* Preview pane */}
          <div className="w-1/2 h-full overflow-auto">
            <iframe
              title="Live Preview"
              srcDoc={srcDoc}
              sandbox="allow-scripts"
              className="w-full h-full border-none"
            />
          </div>
        </div>
        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-300 rounded-b-lg" />
      </motion.div>

      {/* CTA button */}
      <motion.button
        onClick={scrollToContacts}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition"
      >
        Перейти к контактам
        <ArrowDownIcon className="w-5 h-5 ml-2" />
      </motion.button>
    </section>
  )
}

export default Hero
