// src/components/OrderModal.tsx
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  UserIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

/* -------------------------------------------------- */
/*                     STEP DATA                      */
/* -------------------------------------------------- */
const STEPS = [
  { label: 'Контакты', icon: UserIcon },
  { label: 'Компания', icon: BuildingOffice2Icon },
  { label: 'Детали', icon: ClipboardDocumentListIcon },
  { label: 'Бюджет', icon: BanknotesIcon },
];

/* -------------------------------------------------- */
/*                     COMPONENT                      */
/* -------------------------------------------------- */
export function OrderModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(0);

  /* -------- helper -------- */
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        {/* Panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <Dialog.Panel className="w-full max-w-xl bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-blue-200/70">
                <Dialog.Title className="text-lg md:text-xl font-bold text-blue-900">
                  Оставить заявку
                </Dialog.Title>
                <button
                  className="p-2 rounded hover:bg-blue-100"
                  onClick={() => {
                    setStep(0);
                    onClose();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Stepper */}
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between">
                  {STEPS.map((s, idx) => {
                    const active = idx === step;
                    const completed = idx < step;
                    return (
                      <div key={s.label} className="flex-1 flex flex-col items-center">
                        <div
                          className={`w-9 h-9 flex items-center justify-center rounded-full border-2 ${
                            completed
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : active
                              ? 'border-blue-600 text-blue-600'
                              : 'border-blue-300 text-blue-300'
                          }`}
                        >
                          {completed ? (
                            <CheckIcon className="w-5 h-5" />
                          ) : (
                            <s.icon className="w-5 h-5" />
                          )}
                        </div>
                        <span
                          className={`mt-2 text-xs ${
                            active ? 'text-blue-800 font-medium' : 'text-blue-600/70'
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Progress bar */}
                <motion.div
                  className="h-1 bg-blue-200 rounded-full mt-4"
                  style={{ position: 'relative' }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  />
                </motion.div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {step === 0 && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">Имя</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">Название компании</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none"
                        placeholder="ООО «Пример»"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Сайт / соцсети (если есть)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none"
                        placeholder="https://example.com"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">Тип проекта</label>
                      <select className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none">
                        <option>Лендинг</option>
                        <option>Корпоративный сайт</option>
                        <option>Интернет-магазин</option>
                        <option>Web-приложение</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Краткое описание задачи</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-blue-200 focus:outline-none resize-none"
                        placeholder="Опишите цель проекта и основные задачи..."
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <label className="block mb-4 font-medium">Бюджет проекта</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['До 50 000 ₽', '50 000–150 000 ₽', '150 000–300 000 ₽', '300 000+ ₽'].map(
                        (b) => (
                          <label
                            key={b}
                            className="flex items-center space-x-3 px-4 py-3 bg-white border border-blue-200 rounded-2xl cursor-pointer hover:border-blue-400"
                          >
                            <input type="radio" name="budget" value={b} className="accent-blue-600" />
                            <span>{b}</span>
                          </label>
                        ),
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center px-8 pb-8">
                <button
                  disabled={step === 0}
                  onClick={prev}
                  className={`px-5 py-2 rounded-full font-medium transition ${
                    step === 0
                      ? 'bg-blue-200 text-blue-500 cursor-not-allowed'
                      : 'bg-white text-blue-600 shadow hover:bg-blue-50'
                  }`}
                >
                  Назад
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={next}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
                  >
                    Далее
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      alert('Заявка отправлена!');
                      setStep(0);
                      onClose();
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
                  >
                    Отправить
                  </button>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
