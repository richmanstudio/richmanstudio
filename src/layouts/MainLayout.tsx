// src/layouts/MainLayout.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PrivacyModal from '../components/PrivacyModal'

const navItems = [
  { to: '#hero',       label: 'Главная' },
  { to: '#services',   label: 'Услуги' },
  { to: '#process',    label: 'Процесс' },
  { to: '#calculator', label: 'Калькулятор' },
  { to: '#about',      label: 'О нас' },
  { to: '#contacts',   label: 'Контакты' },
]

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPrivacyOpen, setPrivacyOpen] = useState(false)

  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen bg-gray-50 transition-colors">
      {/* Фоновый градиент */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300 opacity-10 mix-blend-multiply" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 shadow-md">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Richman Studio
          </Link>

          {/* Desktop навигация */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.to}
                href={item.to}
                className="relative px-1 py-1 font-medium text-gray-700 hover:text-purple-600 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-purple-600 rounded transition" />
              </a>
            ))}
          </nav>

          {/* Controls (Privacy + Mobile menu) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hidden lg:inline-block text-gray-700 hover:text-purple-600 underline transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden p-2 rounded-md bg-white/40 hover:bg-white/60 transition"
            >
              {menuOpen
                ? <XMarkIcon className="w-6 h-6 text-gray-800" />
                : <Bars3Icon className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile навигация */}
        {menuOpen && (
          <div className="lg:hidden bg-white/80 backdrop-blur-lg shadow-inner">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map(item => (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 px-4 font-medium text-gray-700 hover:bg-gray-100 rounded transition"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { setPrivacyOpen(true); setMenuOpen(false) }}
                className="py-2 px-4 text-gray-700 hover:text-purple-600 underline transition text-left"
              >
                Privacy Policy
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Контент сразу под шапкой */}
      <main className="flex-1 pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 text-center space-y-4">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Richman Studio. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/richmanstudio" className="hover:text-purple-600 transition text-gray-600">
              GitHub
            </a>
            <a href="https://t.me/richmanstudioss" className="hover:text-purple-600 transition text-gray-600">
              Telegram
            </a>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-purple-600 transition underline text-gray-600"
            >
              Privacy Policy
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Designed and developed by Richman Studio.
          </p>
        </div>
      </footer>

      {/* Модальное окно Privacy */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  )
}

export default MainLayout
