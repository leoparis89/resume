/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import IntlProvider from './src/intl/IntlContext'
import ThemeProvider from './src/intl/themeContext'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <IntlProvider>{element}</IntlProvider>
    </ThemeProvider>
  )
}
