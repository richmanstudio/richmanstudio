// src/components/Portfolio.tsx
import React from 'react'
import { motion, type Variants } from 'framer-motion'

type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Corporate Site for “Тектоника”',
    description: 'Адаптивный сайт с интерактивной картой и админ-панелью.',
    imageUrl: '/assets/portfolio/tectonica.png',
  },
  {
    id: 'p2',
    title: 'Online Store “Иезиль”',
    description: 'E-commerce платформа с корзиной и фильтрами.',
    imageUrl: '/assets/portfolio/iezil.png',
  },
  {
    id: 'p3',
    title: 'Music Service “Фи.Музыка”',
    description: 'Плеер, регистрация, drag’n’drop загрузка треков.',
    imageUrl: '/assets/portfolio/fi-music.png',
  },
  {
    id: 'p4',
    title: 'LMS Platform ManyIQ',
    description: 'Система уроков, тестов и прогресса студентов.',
    imageUrl: '/assets/portfolio/manyiQ.png',
  },
]

// Анимационные варианты для карточек
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 60,
      damping: 12,
    },
  }),
}

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Портфолио</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((prj, i) => (
          <motion.div
            key={prj.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={prj.imageUrl}
              alt={prj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{prj.title}</h3>
              <p className="text-gray-600">{prj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Portfolio
