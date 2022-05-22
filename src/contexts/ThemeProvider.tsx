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
    typography: {
      fontFamily: [
        'Futura',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            background: (dark ? DARK_BG : LIGHT_BG) + '!important',
          },
        },
      },
    },
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

export const DARK_BG = '#19191b'

export const LIGHT_BG = '#ffff'

// const makeBg = (col1, col2) => `linear-gradient(0.3turn, ${col1}, ${col2})`
