// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { OrderModal } from './OrderModal';

const logoSrc = '/favicon.ico';

const NAV = [
  { name: 'Главная', to: '/' },
  { name: 'О нас', to: '/about' },
  { name: 'Услуги', to: '/services' },
  { name: 'Портфолио', to: '/portfolio' },
  { name: 'Контакты', to: '/contact' },
];

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ――― shadow / blur on scroll ――― */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all ${
          scrolled
            ? 'bg-white/80 backdrop-blur shadow-lg'
            : 'bg-gradient-to-r from-white/90 to-blue-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo + brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logoSrc} alt="Richman Studio" className="h-8 w-8" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-90 transition">
              Richman&nbsp;<span className="hidden sm:inline">Studio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative font-medium transition ${
                    isActive
                      ? 'text-blue-700 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-600'
                      : 'text-blue-800 hover:text-blue-900'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg"
            onClick={() => setOpenModal(true)}
          >
            Заказать сайт
          </motion.button>

          {/* Burger */}
          <button
            className="md:hidden p-2 rounded-lg text-blue-800 hover:bg-blue-100 transition"
            onClick={() => setOpenMobile(!openMobile)}
          >
            {openMobile ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {openMobile && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="md:hidden bg-white/90 backdrop-blur pb-6"
            >
              <ul className="flex flex-col px-6 space-y-3 pt-4">
                {NAV.map(({ name, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `block w-full px-4 py-2 rounded-lg font-medium ${
                          isActive
                            ? 'bg-blue-600/10 text-blue-700'
                            : 'text-blue-800 hover:bg-blue-100'
                        }`
                      }
                      onClick={() => setOpenMobile(false)}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-full font-semibold"
                    onClick={() => {
                      setOpenModal(true);
                      setOpenMobile(false);
                    }}
                  >
                    Заказать сайт
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Order modal */}
      <OrderModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
