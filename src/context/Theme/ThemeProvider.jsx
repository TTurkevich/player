import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  const toggleTheme = () => {
    if (theme !== themes.light) {
      localStorage.setItem('theme', 'light')
      setTheme(themes.light)
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme(themes.dark)
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
