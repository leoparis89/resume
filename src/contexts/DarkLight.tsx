import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeContext = React.createContext({
  theme: Theme.Light,
  toggleTheme: () => {},
})

export const DarkLightThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark)

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Dark ? Theme.Light : Theme.Dark
    )
  }

  const muiTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
