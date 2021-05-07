import React, { useState } from 'react'

export const ThemeContext = React.createContext({
  dark: false,
  toggleDark: () => {},
})

const ThemeProvider = (props) => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => setDark((dark) => !dark)

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {/* <Global
        styles={css`
          body {
            color: ${dark ? 'black' : 'white'};
            background: ${!dark ? '#251d3d' : 'white'};
            font-family: futura !important;
            transition: color 0.2s ease-out, background 0.2s ease-out;
          }

          a {
            color: ${dark ? 'black' : 'white'};
            background-image: initial;
            text-shadow: initial;
          }
        `}
      /> */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
