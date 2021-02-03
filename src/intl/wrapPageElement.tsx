import React from 'react'
import IntlProvider from './IntlContext'
import ThemeProvider from './themeContext'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider>
      hello
      <IntlProvider>{element}</IntlProvider>
    </ThemeProvider>
  )
}
