import {
  colors,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core'
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

const makeBg = (col1, col2) => `linear-gradient(0.3turn, ${col1}, ${col2})`

export const DARK_BG = makeBg('rgb(24 37 42)', 'rgb(71 65 120)')

export const LIGHT_BG = makeBg(colors.pink[100], colors.blue[100])
