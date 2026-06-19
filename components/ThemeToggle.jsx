"use client"
import { motion } from 'framer-motion'
import { useTheme } from '../lib/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-2 border-[var(--border-bold)] bg-[var(--card)] shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.92 }}
    >
      {/* Sun */}
      <svg
        className="absolute inset-0 m-auto transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: 20,
          height: 20,
          color: 'var(--accent-3)',
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Moon */}
      <svg
        className="absolute inset-0 m-auto transition-all duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: 20,
          height: 20,
          color: 'var(--accent-2)',
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
        }}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </motion.button>
  )
}
