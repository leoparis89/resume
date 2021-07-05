import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useContext, useState } from 'react'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeContext = React.createContext({
  dark: true,
  toggleTheme: () => {},
})

export const DarkLightStateProvider: React.FC = (props) => {
  const [dark, setDark] = useState<boolean>(true)

  const toggleTheme = () => {
    setDark((prevTheme) => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const DarkLightThemeProvider: React.FC = (props) => {
  const { dark } = useContext(ThemeContext)

  const muiTheme = createMuiTheme({
    palette: {
      type: dark ? Theme.Dark : Theme.Light,
    },
  })

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
