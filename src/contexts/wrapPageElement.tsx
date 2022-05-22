import React from 'react'
import { DarkLightStateProvider } from './ThemeProvider'
import IntlProvider from './IntlProvider'

export const wrapPageElement = ({ element, props }) => (
  <IntlProvider>
    <DarkLightStateProvider {...props}>{element}</DarkLightStateProvider>
  </IntlProvider>
)
