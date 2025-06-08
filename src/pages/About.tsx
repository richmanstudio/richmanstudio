// src/pages/About.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = 'Richman Studio — О нас';
  }, []);

  const values = [
    {
      icon: BriefcaseIcon,
      title: 'Профессионализм',
      desc: 'Мы постоянно качаем скиллы — технологии, дизайн-тренды и управление проектами.',
    },
    {
      icon: UserGroupIcon,
      title: 'Командность',
      desc: 'Работаем как единое целое, шарим экспертизу и помогаем друг другу расти.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Открытость',
      desc: 'Прозрачные процессы, честная коммуникация и долгосрочные отношения.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center h-[50vh]">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <motion.h1
          className="z-10 text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          О&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">студии</span>
        </motion.h1>
      </section>

      {/* Mission */}
      <section className="py-28 px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша миссия</h2>
          <p className="text-lg leading-relaxed">
            Помогать бизнесу расти в цифровом пространстве, создавая
            высококонверсионные продукты с продуманным UX и мощной аналитикой.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-blue-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Наши ценности
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              whileHover={{ translateY: -6 }}
              className="relative p-px rounded-3xl shadow-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300"
            >
              <div className="bg-white rounded-[inherit] h-full p-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{v.title}</h3>
                <p className="text-sm leading-relaxed text-blue-700/90">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-blue-600 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Хотите работать с нами?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Мы всегда открыты талантам и новым возможностям сотрудничества.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition"
        >
          Связаться
        </Link>
      </section>
    </div>
  );
}
