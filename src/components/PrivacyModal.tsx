// src/components/PrivacyModal.tsx
import React from 'react'
import { motion, type Variants } from 'framer-motion'

type PrivacyModalProps = {
  isOpen: boolean
  onClose: () => void
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants: Variants = {
  hidden: { y: -1000, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative"
        variants={modalVariants}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Политика конфиденциальности
        </h3>

        <div className="text-gray-700 dark:text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Мы собираем, храним и обрабатываем ваши персональные данные исключительно в целях
            оказания услуг веб-разработки. Ваши данные не передаются третьим лицам без вашего
            согласия.
          </p>
          <p>
            <strong>Какие данные мы собираем:</strong> имя, email и сообщение из формы обратной связи.
          </p>
          <p>
            <strong>Как мы храним данные:</strong> в защищённой базе данных, доступ к которой имеют
            только сотрудники Richman Studio.
          </p>
          <p>
            <strong>Ваши права:</strong> вы можете в любой момент запросить удаление или изменение
            своих данных, написав на <a href="mailto:info@richmanstudio.ru" className="text-purple-600 underline">info@richmanstudio.ru</a>.
          </p>
          <p>
            Если у вас есть вопросы по политике конфиденциальности, свяжитесь с нами любым удобным
            способом.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PrivacyModal
