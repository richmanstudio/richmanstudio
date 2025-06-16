// src/hooks/useWindowSize.ts
import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

/**
 * Хук для получения текущих размеров окна браузера.
 * Отслеживает событие 'resize' и обновляет значения width и height.
 */
function useWindowSize(): WindowSize {
  // По умолчанию выставляем нулевые размеры (SSR-safe).
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Если window не определён (например, на сервере), ничего не делаем.
    if (typeof window === 'undefined') {
      return
    }

    // Функция-обработчик resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Устанавливаем начальные размеры при маунте
    handleResize()

    // Подписываемся на событие изменения размера окна
    window.addEventListener('resize', handleResize)

    // Чистим обработчик при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
