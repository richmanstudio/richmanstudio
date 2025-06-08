// src/components/Notifications.tsx
import React, { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

type NotificationType = 'success' | 'error';
interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface NotificationContextValue {
  notify: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const useNotification = (): NotificationContextValue => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider');
  return ctx;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (message: string, type: NotificationType = 'success') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
        <AnimatePresence>
          {notifications.map(({ id, message, type }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`max-w-xs w-full p-4 rounded-lg shadow-lg border-l-4 flex items-center space-x-3 bg-primary text-white border-${type === 'success' ? 'green' : 'red'}-500`}
            >
              {type === 'success' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              ) : (
                <ExclamationCircleIcon className="h-6 w-6 text-red-400" />
              )}
              <span className="text-sm">{message}</span>
              <button onClick={() => setNotifications((prev) => prev.filter((n) => n.id !== id))} className="ml-auto p-1 hover:bg-white/10 rounded">
                <XMarkIcon className="h-5 w-5 text-white" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
