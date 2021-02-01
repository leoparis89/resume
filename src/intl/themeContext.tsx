import React, { useState } from 'react'

export const ThemeContext = React.createContext({
  dark: false,
  toggleDark: () => {},
})

const ThemeProvider = props => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => setDark(dark => !dark)

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
