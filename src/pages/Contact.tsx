// src/pages/Contact.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  useEffect(() => {
    document.title = 'Richman Studio — Контакты';
  }, []);

  const schema = Yup.object({
    name: Yup.string().min(2, 'Слишком коротко').required('Обязательное поле'),
    email: Yup.string().email('Неверный email').required('Обязательное поле'),
    message: Yup.string().min(10, 'Сообщение слишком короткое').required('Обязательное поле'),
  });

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center h-[50vh]">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-pulse" />
        <motion.h1
          className="z-10 text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Свяжитесь&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            с нами
          </span>
        </motion.h1>
      </section>

      {/* Info + Form */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold">Контактная информация</h2>

          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-7 w-7 text-blue-600" />
            <p>г. Хабаровск</p>
          </div>

          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-7 w-7 text-blue-600" />
            <a href="tel:+74212123456" className="hover:text-blue-700 transition">
              +7&nbsp;(914)&nbsp;409-24-54
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-7 w-7 text-blue-600" />
            <a href="mailto:info@richmanstudio.ru" className="hover:text-blue-700 transition">
              info@richmanstudio.ru
            </a>
          </div>

        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>

          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={schema}
            onSubmit={(vals, { resetForm }) => {
              console.log(vals);
              alert('Сообщение отправлено!');
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Имя
                  </label>
                  <Field
                    name="name"
                    className="w-full px-5 py-3 bg-white rounded-2xl shadow-inner border border-blue-200 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                  <ErrorMessage name="name" component="div" className="text-sm text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-3 bg-white rounded-2xl shadow-inner border border-blue-200 focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Ваше сообщение..."
                    className="w-full px-5 py-3 bg-white rounded-2xl shadow-inner border border-blue-200 focus:outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить'}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </section>
    </div>
  );
}
