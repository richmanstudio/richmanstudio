// src/components/Contacts.tsx
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { motion } from 'framer-motion'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaVk, FaTelegramPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'

// Leaflet marker icons setup
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png'
import markerUrl from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerUrl,
  shadowUrl: markerShadow,
})

const Contacts: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_sr8kudg',
        'template_3od0l4j',
        { from_name: name, from_email: email, message },
        'DEaOEHL3__O7lGwhi'
      )
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contacts" className="relative py-24 bg-gradient-to-br from-indigo-50 to-white">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 bg-purple-300 opacity-20 rounded-full filter blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 bg-blue-300 opacity-20 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Свяжитесь с нами
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="w-8 h-8 text-purple-600" />
                <a href="tel:+71234567890" className="text-gray-700 hover:text-purple-600 transition">
                  +7 (123) 456-78-90
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="w-8 h-8 text-purple-600" />
                <a href="mailto:info@richmanstudio.ru" className="text-gray-700 hover:text-purple-600 transition">
                  info@richmanstudio.ru
                </a>
              </div>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://vk.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition"
                >
                  <FaVk className="w-6 h-6 text-gray-600" />
                </a>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition"
                >
                  <FaTelegramPlane className="w-6 h-6 text-gray-600" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <MapContainer
                center={[48.48, 135.07]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: 400, width: '100%' }}
                attributionControl={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                <Marker position={[48.48, 135.07]}>
                  <Popup>Richman Studio — Хабаровск</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          {/* Feedback Form */}
          <motion.form
            className="flex-1 bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {status === 'success' && (
              <div className="p-4 bg-green-200 rounded-lg text-green-800 text-center font-medium">
                Спасибо! Мы получили ваше сообщение.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-200 rounded-lg text-red-800 text-center font-medium">
                Ошибка отправки. Пожалуйста, попробуйте позже.
              </div>
            )}
            <div>
              <label className="block text-gray-700 mb-2">Ваше имя</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Иван Иванов"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 transition"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 transition"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Сообщение</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Расскажите о вашем проекте..."
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 transition"
                disabled={status === 'sending'}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-4 font-semibold rounded-xl transition ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Отправляем...' : 'Отправить'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
