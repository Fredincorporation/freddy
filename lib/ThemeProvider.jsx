"use client"
import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

function getHour() {
  try {
    return new Date().getHours()
  } catch {
    return 14
  }
}

function detectTheme() {
  const h = getHour()
  // 6 AM – 5:59 PM → light, otherwise dark
  return h >= 6 && h < 18 ? 'light' : 'dark'
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('freddy-theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    } else {
      setTheme(detectTheme())
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('freddy-theme', theme)
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
