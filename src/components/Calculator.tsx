// src/components/Calculator.tsx
import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

type SiteType = {
  id: string
  label: string
  basePrice: number
  description: string
}

type ExtraFeature = {
  id: string
  label: string
  price: number
}

const SITE_TYPES: SiteType[] = [
  {
    id: 'landing',
    label: 'Лендинг',
    basePrice: 15000,
    description: 'Яркий одностраничник с чётким призывом к действию',
  },
  {
    id: 'corporate',
    label: 'Корпоративный',
    basePrice: 25000,
    description: 'Многостраничный сайт для вашего бизнеса',
  },
  {
    id: 'ecommerce',
    label: 'Интернет-магазин',
    basePrice: 40000,
    description: 'Каталог товаров, корзина, онлайн-оплата',
  },
  {
    id: 'lms',
    label: 'LMS-платформа',
    basePrice: 55000,
    description: 'Платформа для курсов, тестов и учёта успеваемости',
  },
  {
    id: 'pwa',
    label: 'PWA / Web App',
    basePrice: 60000,
    description: 'Прогрессивное приложение с офлайн-режимом',
  },
]

const EXTRA_FEATURES: ExtraFeature[] = [
  { id: 'seo',        label: 'SEO-оптимизация',           price: 12000 },
  { id: 'animation',  label: 'Анимации и микро-UX',        price: 8000  },
  { id: 'cms',        label: 'Интеграция с CMS',           price: 10000 },
  { id: 'analytics',  label: 'Подключение Analytics',      price: 5000  },
  { id: 'i18n',       label: 'Мультиязычность',            price: 9000  },
  { id: 'payment',    label: 'Интеграция платёжных систем',price: 15000 },
  { id: 'support',    label: '6 мес. техподдержки',        price: 12000 },
]

const Calculator: React.FC = () => {
  // Состояния
  const [typeId, setTypeId] = useState<string>(SITE_TYPES[0].id)
  const [pages, setPages] = useState<number>(3)
  const [extras, setExtras] = useState<Set<string>>(new Set())

  const selectedType = SITE_TYPES.find(t => t.id === typeId)!

  // Переключение опций
  const toggleExtra = (id: string) => {
    setExtras(prev => {
      const next = new Set(prev)
      if (prev.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Расчёт суммы, детализация и прогресса
  const { total, breakdown, completeness } = useMemo(() => {
    const pagesCost = pages * 2000
    let sum = selectedType.basePrice + pagesCost
    const details = [
      { label: 'Базовая ставка',       price: selectedType.basePrice },
      { label: `Страницы × ${pages}`, price: pagesCost },
    ]
    EXTRA_FEATURES.forEach(f => {
      if (extras.has(f.id)) {
        sum += f.price
        details.push({ label: f.label, price: f.price })
      }
    })
    const maxSum =
      Math.max(...SITE_TYPES.map(t => t.basePrice)) +
      20 * 2000 +
      EXTRA_FEATURES.reduce((acc, f) => acc + f.price, 0)
    const comp = Math.min(100, Math.round((sum / maxSum) * 100))
    return { total: sum, breakdown: details, completeness: comp }
  }, [selectedType, pages, extras])

  return (
    <section id="calculator" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {/* Заголовок */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Калькулятор стоимости
        </h2>

        {/* Выбор типа сайта */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_TYPES.map(t => {
            const active = t.id === typeId
            return (
              <motion.div
                key={t.id}
                onClick={() => setTypeId(t.id)}
                className={`relative cursor-pointer rounded-xl border transition-all p-6 bg-white ${
                  active
                    ? 'border-purple-600 shadow-xl'
                    : 'border-gray-300 hover:shadow-lg'
                }`}
                whileHover={{ scale: active ? 1.02 : 1.04 }}
              >
                {active && (
                  <span className="absolute -top-3 right-4 px-2 py-1 bg-purple-600 text-white text-xs rounded">
                    Выбрано
                  </span>
                )}
                <h3 className={`text-xl font-semibold mb-2 ${active ? 'text-purple-600' : 'text-gray-800'}`}>
                  {t.label}
                </h3>
                <p className="text-gray-500 mb-4 text-sm">{t.description}</p>
                <p className="text-lg font-bold">
                  от <span className="text-purple-600">{t.basePrice.toLocaleString()}₽</span>
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Слайдер страниц */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Количество страниц: <span className="text-purple-600">{pages}</span>
          </h3>
          <input
            type="range"
            min={1}
            max={20}
            value={pages}
            onChange={e => setPages(+e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>1</span>
            <span>20</span>
          </div>
        </div>

        {/* Дополнительные опции */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Дополнительные опции</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {EXTRA_FEATURES.map(f => (
              <label
                key={f.id}
                className={`flex items-center p-4 border rounded-lg transition-all cursor-pointer ${
                  extras.has(f.id)
                    ? 'bg-purple-50 border-purple-600'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={extras.has(f.id)}
                  onChange={() => toggleExtra(f.id)}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <div className="ml-4 flex-1">
                  <div className="font-medium">{f.label}</div>
                  <div className="text-sm text-gray-500">+{f.price.toLocaleString()}₽</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Детализация и прогресс */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold">Детализация сметы</h3>
          <div className="space-y-2">
            {breakdown.map((d, i) => (
              <div key={i} className="flex justify-between">
                <span>{d.label}</span>
                <span className="font-medium">{d.price.toLocaleString()}₽</span>
              </div>
            ))}
          </div>
          <div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600"
                style={{ width: `${completeness}%` }}
              />
            </div>
            <div className="mt-2 text-right text-sm text-gray-600">
              Заполнено: <span className="font-medium">{completeness}%</span>
            </div>
          </div>
        </div>

        {/* Итоговая сумма */}
        <div className="text-center space-y-4">
          <div className="text-lg text-gray-600">Итого к оплате</div>
          <motion.div
            key={total}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-extrabold text-purple-600"
          >
            {total.toLocaleString()}₽
          </motion.div>
          <button
            onClick={() => (window.location.hash = '#contacts')}
            className="mt-4 px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  )
}

export default Calculator
