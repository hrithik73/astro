import React, { useState, createContext, useEffect } from "react"
import { theme } from "../config/Theme"
export const ThemeContext = createContext()

const changeTheme = (mode) => {
 document.body.style.setProperty("--color", theme[mode].color)
 document.body.style.setProperty(
  "--background-color",
  theme[mode].backgroundColor
 )
 localStorage.setItem("theme", mode)

 document.documentElement.style.setProperty("--background-color",
  theme[mode].backgroundColor)
 document.documentElement.style.setProperty('--color', theme[mode].color);
}

const ThemeProvider = ({ children }) => {
 const [mode, setTheme] = useState("dark")

 useEffect(() => {
  const localTheme = localStorage.getItem("theme")
  const theme = localTheme === null ? "dark" : localTheme
  setTheme(theme)
 }, [])

 useEffect(() => {
  changeTheme(mode)
 }, [mode])
 return (
  <ThemeContext.Provider
   value={{
    mode,
    setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
   }}
  >
   {children}
  </ThemeContext.Provider>
 )
}

export default ThemeProvider