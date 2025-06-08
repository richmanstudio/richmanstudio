// src/pages/Portfolio.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  link: string;
}

/* ------------------------- MOCK PROJECTS ------------------------- */
const allProjects: Project[] = [
  {
    id: 1,
    title: 'ООО "ТЕКТОНИКА"',
    category: 'Корпоративный сайт',
    img: '/assets/tektonika.png',
    description:
      'CRM-интеграция, личные кабинеты и BI-аналитика в одном решении.',
    link: '/portfolio/1',
  },
];

const categories = [
  'Все',
  'Лендинг',
  'Корпоративный сайт',
  'Интернет-магазин',
  'Web-приложение',
];

export default function Portfolio() {
  const [filter, setFilter] = useState('Все');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.title = 'Richman Studio — Портфолио';
  }, []);

  const filtered =
    filter === 'Все' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center h-[50vh]">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <motion.h1
          className="z-10 text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Наши&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            кейсы
          </span>
        </motion.h1>
      </section>

      {/* Filters */}
      <section className="py-16 px-6 text-center">
        <motion.div
          className="inline-flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                  : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {filtered.map((proj) => (
            <motion.div
              key={proj.id}
              variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
              whileHover={{ translateY: -6 }}
              onClick={() => setSelected(proj)}
              className="relative p-px rounded-3xl shadow-lg cursor-pointer bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300"
            >
              <div className="bg-white rounded-[inherit] h-full overflow-hidden">
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-blue-800">{proj.title}</h3>
                  <p className="text-sm text-blue-700/80">{proj.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-blue-900 rounded-3xl max-w-3xl w-full overflow-visible relative shadow-xl"
              initial={{ scale: 0.8, y: -40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-60 object-cover rounded-t-3xl"
              />
              <div className="p-10">
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="text-sm text-blue-700/80 mb-6">{selected.category}</p>
                <p className="leading-relaxed mb-8">{selected.description}</p>
                <Link
                  to={selected.link}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  Подробнее <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
