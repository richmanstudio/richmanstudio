// src/components/About.tsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  LightBulbIcon,
  UsersIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const FEATURES = [
  {
    icon: <LightBulbIcon className="w-12 h-12 text-purple-600" />,
    title: 'Индивидуальный подход',
    description:
      'Каждый проект начинается с глубинного брифинга и исследования вашей отрасли.',
  },
  {
    icon: <UsersIcon className="w-12 h-12 text-purple-600" />,
    title: 'Прозрачность процессов',
    description:
      'Доступ к таск-менеджеру, регулярные отчёты и демонстрации промежуточных версий.',
  },
  {
    icon: <GlobeAltIcon className="w-12 h-12 text-purple-600" />,
    title: 'Современный стек',
    description:
      'React, TypeScript, TailwindCSS, Framer Motion, Next.js и headless CMS.',
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-purple-600" />,
    title: 'Гарантия качества',
    description:
      'Многоступенчатое тестирование, аудит безопасности и пост-релизная поддержка.',
  },
]

const STATS = [
  { value: '200+', label: 'завершённых проектов' },
  { value: '98%', label: 'удовлетворённость клиентов' },
  { value: '5 лет', label: 'на рынке' },
  { value: '50+', label: 'сертифицированных специалистов' },
]

const About: React.FC = () => (
  <section id="about" className="relative py-24 bg-gray-50 overflow-hidden">
    {/* Декоративные круги */}
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply opacity-30" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply opacity-30" />

    <div className="relative container mx-auto px-4 lg:px-8 space-y-20">
      {/* Заголовок и описание */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-5xl font-extrabold text-gray-800">
          О нас
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Richman Studio — команда веб-магов, превращающая идеи в эффективные
          цифровые продукты. С 2020 года выполнили более 200 проектов для
          стартапов, корпораций и образовательных платформ.
        </p>
      </motion.div>

      {/* Особенности */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-2xl text-center space-y-4 shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            {f.icon}
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl font-extrabold text-purple-600 mb-2">
              {s.value}
            </div>
            <div className="text-gray-600">{s.label}</div>
          </motion.div>
        ))}
      </div>


    </div>
  </section>
)

export default About
