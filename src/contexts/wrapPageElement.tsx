import React from 'react'
import { DarkLightThemeProvider } from './DarkLight'
import IntlProvider from './IntlContext'

export const wrapPageElement = ({ element, props }) => (
  <IntlProvider>
    <DarkLightThemeProvider {...props}>{element}</DarkLightThemeProvider>
  </IntlProvider>
)
