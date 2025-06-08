// src/pages/Services.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  SparklesIcon,
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    document.title = 'Richman Studio — Услуги';
  }, []);

  const services = [
    {
      icon: BriefcaseIcon,
      title: 'Веб-разработка',
      desc: 'Лендинги, CRM-системы, e-commerce-платформы с упором на скорость и SEO.',
      gradient: 'from-blue-500 via-cyan-400 to-sky-300',
    },
    {
      icon: SparklesIcon,
      title: 'UI/UX дизайн',
      desc: 'User-first интерфейсы, микро-анимации и прототипы в Figma / Framer.',
      gradient: 'from-purple-500 via-violet-400 to-fuchsia-300',
    },
    {
      icon: CodeBracketIcon,
      title: 'Frontend / Backend',
      desc: 'React, TypeScript, Node.js, Python, Go, GraphQL — полный цикл разработки.',
      gradient: 'from-teal-500 via-emerald-400 to-green-300',
    },
    {
      icon: ChartBarIcon,
      title: 'SEO & Growth',
      desc: 'Технический SEO, контент-маркетинг и сквозная аналитика.',
      gradient: 'from-amber-500 via-yellow-400 to-orange-300',
    },
    {
      icon: PaintBrushIcon,
      title: 'Digital-брендинг',
      desc: 'Айдентика, гайдлайны и UI-кит под React.',
      gradient: 'from-rose-500 via-pink-400 to-rose-300',
    },
    {
      icon: GlobeAltIcon,
      title: 'Scale & DevOps',
      desc: 'K8s, CI/CD, Auto-scaling, multi-cloud и безопасность.',
      gradient: 'from-indigo-500 via-blue-400 to-sky-300',
    },
  ];

  const reasons = [
    { icon: ClockIcon, text: 'Жёсткий контроль сроков' },
    { icon: UserGroupIcon, text: 'Синергия кросс-функциональной команды' },
    { icon: CheckCircleIcon, text: 'QA 360° и регресс-тесты' },
    { icon: GlobeAltIcon, text: 'Работаем с клиентами по всему миру' },
  ];

  const processSteps = [
    'Discovery-сессия и брифинг',
    'UX-исследования, CJM, прототип',
    'UI-дизайн и дизайн-система',
    'Frontend / Backend разработка',
    'QA + UAT, запуск',
    'Аналитика, поддержка, рост',
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center h-[60vh]">
        <div className="absolute -top-24 -left-36 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-24 -right-36 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <motion.h1
          className="z-10 text-5xl md:text-6xl font-extrabold tracking-tight text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Что мы{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            делаем
          </span>
        </motion.h1>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
              whileHover={{ translateY: -6 }}
              className={`relative p-px rounded-3xl shadow-lg bg-gradient-to-br ${svc.gradient}`}
            >
              <div className="bg-white rounded-[inherit] h-full p-10">
                <div
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${svc.gradient} text-white shadow-inner`}
                >
                  <svc.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-blue-700/90 mb-6">{svc.desc}</p>
                <Link
                  to="/contact"
                  className="group text-blue-600 font-medium flex items-center space-x-1 hover:underline"
                >
                  <span>Подробнее</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-blue-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Почему{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            мы
          </span>
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md flex items-start space-x-4 border-t-4 border-blue-600/20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
                <r.icon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-lg leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-40 px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Наш{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            процесс
          </span>
        </motion.h2>
        <div className="relative max-w-5xl mx-auto before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-300 before:via-blue-400 before:to-blue-600">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className={`relative flex md:block ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-24`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="bg-blue-100 p-10 rounded-2xl shadow-lg">
                <span className="text-blue-600 font-bold block mb-2">Шаг {i + 1}</span>
                <p className="leading-relaxed">{step}</p>
              </div>
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Готовы обсудить проект?
        </motion.h2>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition"
        >
          Связаться с нами
        </Link>
      </section>
    </div>
  );
}
