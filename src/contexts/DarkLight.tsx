import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useContext, useState } from 'react'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeStateContext = React.createContext({
  dark: true,
  toggleTheme: () => {},
})

export const DarkLightStateProvider: React.FC = (props) => {
  const [dark, setDark] = useState<boolean>(true)

  const toggleTheme = () => {
    setDark((prevTheme) => !prevTheme)
  }

  return (
    <ThemeStateContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeStateContext.Provider>
  )
}

export const useThemeState = () => useContext(ThemeStateContext)

export const DarkLightThemeProvider: React.FC = (props) => {
  const { dark } = useThemeState()

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
