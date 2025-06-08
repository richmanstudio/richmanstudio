// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-blue-50">
      {/* --- Decorative blobs --- */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-cyan-400 rounded-full blur-3xl opacity-20 mix-blend-lighten pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-sky-500 rounded-full blur-3xl opacity-20 mix-blend-lighten pointer-events-none" />

      {/* --- Upper Section --- */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 pt-24 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src="/favicon.ico" alt="Richman Studio" className="h-10 w-10" />
              <span className="text-2xl font-extrabold tracking-tight">Richman Studio</span>
            </Link>
            <p className="text-sm/relaxed text-blue-200 max-w-xs">
              Мы создаём веб-опыт, который увеличивает продажи и строит долгосрочную ценность
              бренда.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-100">Меню сайта</h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Главная' },
                { to: '/about', label: 'О нас' },
                { to: '/services', label: 'Услуги' },
                { to: '/portfolio', label: 'Портфолио' },
                { to: '/contact', label: 'Контакты' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <ArrowUpRightIcon className="h-4 w-4 opacity-70" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-100">Наши услуги</h3>
            <ul className="space-y-3 text-sm">
              {[
                'Веб-разработка',
                'UI/UX дизайн',
                'SEO & Growth',
                'Digital-брендинг',
                'Scale & DevOps',
              ].map((svc) => (
                <li key={svc} className="hover:text-white transition-colors">
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-100">Связаться с нами</h3>
            <ul className="space-y-4 text-sm mb-8">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                <span>г. Хабаровск</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                <a href="tel:+74212123456" className="hover:text-white transition-colors">
                  +7 (914) 409-24-54
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                <a
                  href="mailto:info@richmanstudio.ru"
                  className="hover:text-white transition-colors"
                >
                  info@richmanstudio.ru
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо за подписку!');
              }}
              className="flex items-center bg-blue-600/30 border border-blue-500 rounded-full overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="Ваш email"
                className="flex-grow px-4 py-3 text-sm bg-transparent placeholder-blue-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition p-3"
                aria-label="Подписаться"
              >
                <PaperAirplaneIcon className="h-5 w-5 text-white rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Bottom Bar --- */}
      <div className="bg-slate-900 py-6 px-6 md:px-12 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Richman Studio • Все права защищены.
      </div>
    </footer>
  );
}
