// src/components/Process.tsx
import React from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  PencilIcon,
  CodeBracketIcon,
  CubeIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

type Step = {
  id: string
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    id: 'design',
    title: 'Дизайн',
    description: 'Создаём макет, подбираем цвета, типографику и UX.',
    icon: PencilIcon,
  },
  {
    id: 'development',
    title: 'Разработка',
    description: 'Верстаем и программируем логику на React + TS.',
    icon: CodeBracketIcon,
  },
  {
    id: 'integration',
    title: 'Интеграция',
    description: 'Подключаем CMS, API и настраиваем бэкенд.',
    icon: CubeIcon,
  },
  {
    id: 'testing',
    title: 'Тестирование',
    description: 'Проводим кросс-браузерное и юзабилити-тесты.',
    icon: BeakerIcon,
  },
  {
    id: 'launch',
    title: 'Деплой',
    description: 'Запускаем проект в продакшн, настраиваем домен.',
    icon: RocketLaunchIcon,
  },
]

const stepVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
}

const Process: React.FC = () => (
  <section id="process" className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Процесс работы</h2>
      <div className="flex overflow-x-auto space-x-8 pb-4">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            className="flex-shrink-0 w-64 bg-gray-50 rounded-2xl p-6 shadow-md"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={stepVariants}
            custom={idx}
          >
            <step.icon className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Process
