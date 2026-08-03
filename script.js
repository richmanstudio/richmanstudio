const translations = {
  ru: {
    'nav.work':'Проекты','nav.expertise':'Экспертиза','nav.about':'Обо мне','nav.contact':'Обсудить проект',
    'hero.availability':'Открыт для избранных проектов','hero.line1':'Инженер цифровых','hero.line2':'продуктов','hero.copy':'Превращаю сложные бизнес-задачи в быстрые, ясные и поддерживаемые цифровые продукты — от первой гипотезы до продакшена.','hero.cta':'Смотреть избранные проекты',
    'proof.years':'лет в программировании','proof.commercial':'года коммерческой практики','proof.scope':'продуктовое мышление и разработка','proof.founder':'Сооснователь / Разработка',
    'work.kicker':'Избранные проекты','work.title':'Системы, у которых<br>есть причина существовать.','work.intro':'Продукты, в которых интерфейс, архитектура и бизнес-логика работают как единая система.',
    'cases.resportal.type':'LegalTech · SaaS-платформа','cases.resportal.copy':'Сфокусированная рабочая среда для юристов: клиенты, дела, документы, процессуальные сроки, команда и подписки в одном продукте.',
    'cases.deploy.type':'DevTools · Open source CLI','cases.deploy.copy':'Production-ready CLI на Go для повторяемых SSH-деплоев, предварительной проверки и автоматического отката при ошибке.',
    'cases.bookverse.type':'Социальный продукт · Web app','cases.bookverse.copy':'Социальный продукт для читателей с книжными полками, рецензиями, лентой, поиском, статистикой и достижениями.','cases.view':'Открыть проект',
    'archive.kicker':'Другие инженерные работы','archive.polza':'Импорт данных и индексированный каталог','archive.bot':'Отказоустойчивая доставка лидов в CRM','archive.tektonika':'Коммерческий сайт компании',
    'expertise.kicker':'Экспертиза','expertise.title':'От неясной идеи<br>до работающей системы.','expertise.intro':'Не набор разрозненных услуг, а единый продуктовый процесс с ответственностью за результат от начала до конца.',
    'expertise.product.title':'Продукт и UX','expertise.product.copy':'Исследование, продуктовая логика, информационная архитектура, прототипы и интерфейсы, основанные на реальных решениях пользователя.',
    'expertise.engineering.title':'Full-stack разработка','expertise.engineering.copy':'Быстрый доступный фронтенд; надёжные API, модели данных, интеграции и инфраструктура, которую легко развивать.',
    'expertise.automation.title':'Автоматизация и AI','expertise.automation.copy':'Внутренние системы, Telegram-продукты, CRM-сценарии и прагматичные AI-интеграции, которые убирают рутинную работу.',
    'about.kicker':'Обо мне','about.line1':'Мне важен','about.accent1':'весь продукт,','about.line2':'а не только код.','about.copy1':'Я Данила — продуктовый инженер и сооснователь DUONIQ. Работаю на пересечении бизнес-мышления, дизайна интерфейсов и разработки.','about.copy2':'Моя задача — убрать неопределённость, найти кратчайший путь к полезному релизу и построить систему, способную расти после запуска.',
    'about.principles':'Принципы, а не декор','about.p1':'Ясность важнее количества функций','about.p2':'Факты важнее предположений','about.p3':'Система важнее временных заплаток','about.p4':'Результат важнее объёма работы',
    'duoniq.role':'Сооснователь / Студия продуктовой разработки','duoniq.slogan':'Два основателя. Один ясный результат.',
    'contact.kicker':'Контакты','contact.note':'Есть серьёзный продукт, который нужно создать?<br>Сделаем первый разговор полезным.','contact.cta':'За работу','contact.footer':'Спроектировано и разработано осмысленно.','contact.top':'Наверх'
  }
};

const originalText = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => originalText.set(el, el.innerHTML));

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'ru' ? (translations.ru[key] || originalText.get(el)) : originalText.get(el);
  });
  document.title = lang === 'ru' ? 'Данила Капшук — Продуктовый инженер' : 'Danila Kapshuk — Product Engineer';
  localStorage.setItem('portfolio-language', lang);
}

const preferredLanguage = localStorage.getItem('portfolio-language') || (navigator.language.startsWith('ru') ? 'ru' : 'en');
setLanguage(preferredLanguage);
document.querySelector('[data-lang]').addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'ru' : 'en'));

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
function toggleMenu(force) {
  const open = typeof force === 'boolean' ? force : !document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open', open);
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.toggleAttribute('inert', !open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
}
menuToggle.addEventListener('click', () => toggleMenu());
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleMenu(false); });

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: .12, rootMargin: '0px 0px -40px' });
reveals.forEach((el, index) => { el.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`; observer.observe(el); });

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const header = document.querySelector('[data-header]');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.classList.toggle('is-fixed', current > 84);
  header.classList.toggle('is-hidden', current > lastScroll && current > 500 && !document.body.classList.contains('menu-open'));
  lastScroll = current;
}, { passive: true });

document.querySelectorAll('.magnetic').forEach(element => {
  element.addEventListener('pointermove', event => {
    const box = element.getBoundingClientRect();
    element.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .1}px, ${(event.clientY - box.top - box.height / 2) * .12}px)`;
  });
  element.addEventListener('pointerleave', () => element.style.transform = '');
});

const clock = document.querySelector('[data-clock]');
function updateClock() {
  try {
    const time = new Intl.DateTimeFormat('en-GB', { timeZone:'Asia/Vladivostok', hour:'2-digit', minute:'2-digit', hour12:false }).format(new Date());
    clock.textContent = `${time} GMT+10`;
  } catch { clock.textContent = 'GMT+10'; }
}
updateClock(); setInterval(updateClock, 60000);
