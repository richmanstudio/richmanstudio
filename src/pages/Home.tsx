// src/pages/Home.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BriefcaseIcon,
  SparklesIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  useEffect(() => {
    document.title = 'Richman Studio — Главная';
  }, []);

  const metrics = [
    { icon: BriefcaseIcon, value: 19, label: 'Проектов' },
    { icon: SparklesIcon, value: 24, label: 'Дизайн-проектов' },
    { icon: GlobeAltIcon, value: 99, label: 'Довольных Клиентов', suffix: '%' },
    { icon: CheckBadgeIcon, value: 45, label: 'Рост конверсии', suffix: '%' },
  ];

  const services = [
    { icon: BriefcaseIcon, title: 'Веб-разработка' },
    { icon: SparklesIcon, title: 'UI/UX дизайн' },
    { icon: GlobeAltIcon, title: 'SEO & маркетинг' },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center h-[70vh]">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
        <motion.div
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Richman{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Studio
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Веб-решения, которые увеличивают продажи и создают незабываемый опыт.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Наши услуги
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            >
              Кейсы <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              <m.icon className="h-12 w-12 text-blue-600 mb-4" />
              <span className="text-4xl font-bold text-blue-800">
                {m.value}{m.suffix || ''}
              </span>
              <span className="text-lg mt-1">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-blue-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Наши ключевые услуги
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              whileHover={{ scale: 1.05 }}
            >
              <s.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{s.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Отзывы клиентов
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              author: 'Евгения Вишня (Мастер-маникюра)',
              text: '«Вы превзошли все мои ожидания: дизайн на высоте!»',
            },
            {
              author: 'Антон Юрчук (Директор ООО "Тектоника")',
              text: '«Профессиональная работа и отличный результат.»',
            },
          ].map((t, i) => (
            <motion.blockquote
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md italic"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
            >
              <p className="mb-4 leading-relaxed">{t.text}</p>
              <cite className="block text-right font-semibold">— {t.author}</cite>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-blue-600 text-white">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          Готовы начать проект?
        </motion.h2>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition"
        >
          Связаться с нами
        </Link>
      </section>
    </div>
  );
}
