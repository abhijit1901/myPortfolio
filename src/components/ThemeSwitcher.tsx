"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-200 p-5 dark:bg-gray-800 shadow-lg transition-all hover:scale-110"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="w-7 h-7 text-yellow-400" />
      ) : (
        <Moon className="w-7 h-7 text-gray-600" />
      )}
    </button>
  )
}

export default ThemeSwitcher
