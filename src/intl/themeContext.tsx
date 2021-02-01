import React, { useState } from 'react'

import { Global, css } from '@emotion/core'

export const ThemeContext = React.createContext({
  dark: false,
  toggleDark: () => {},
})

const ThemeProvider = props => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => setDark(dark => !dark)

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <Global
        styles={css({
          color: dark ? 'black' : 'white',
        })}
      />
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
