// src/components/Services.tsx
import React from 'react'
import {
  SparklesIcon,
  BuildingLibraryIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  BoltIcon,
  Cog6ToothIcon,
  CubeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

type Service = {
  id: string
  icon: React.ReactNode
  title: string
}

const SERVICES: Service[] = [
  { id: 'landing',     icon: <SparklesIcon className="w-8 h-8 text-purple-600" />,    title: 'Лендинг' },
  { id: 'corporate',   icon: <BuildingLibraryIcon className="w-8 h-8 text-purple-600" />, title: 'Корпоративный' },
  { id: 'ecommerce',   icon: <ShoppingCartIcon className="w-8 h-8 text-purple-600" />,    title: 'Интернет-магазин' },
  { id: 'lms',         icon: <AcademicCapIcon className="w-8 h-8 text-purple-600" />,     title: 'LMS-платформа' },
  { id: 'pwa',         icon: <GlobeAltIcon className="w-8 h-8 text-purple-600" />,       title: 'PWA / Web App' },
  { id: 'blog',        icon: <NewspaperIcon className="w-8 h-8 text-purple-600" />,      title: 'Блог/Портал' },
  { id: 'marketplace', icon: <PuzzlePieceIcon className="w-8 h-8 text-purple-600" />,     title: 'Маркетплейс' },
  { id: 'seo',         icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,       title: 'SEO-оптимизация' },
  { id: 'speed',       icon: <BoltIcon className="w-8 h-8 text-purple-600" />,           title: 'Оптимизация' },
  { id: 'automation',  icon: <Cog6ToothIcon className="w-8 h-8 text-purple-600" />,      title: 'Автоматизация' },
  { id: 'cms',         icon: <CubeIcon className="w-8 h-8 text-purple-600" />,           title: 'CMS-интеграция' },
  { id: 'support',     icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600" />,    title: 'Техподдержка' },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Наши услуги
      </h2>
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-flex animate-marquee"
          style={{ animationDuration: '20s' }}
        >
          {SERVICES.concat(SERVICES).map((svc, idx) => (
            <div
              key={`${svc.id}-${idx}`}
              className="flex items-center bg-white shadow-md rounded-lg px-6 py-3 mx-4"
            >
              {svc.icon}
              <span className="ml-3 font-medium text-gray-700">{svc.title}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Services
