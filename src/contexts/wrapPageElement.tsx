import React from 'react'
import { DarkLightStateProvider } from './DarkLight'
import IntlProvider from './IntlContext'

export const wrapPageElement = ({ element, props }) => (
  <IntlProvider>
    <DarkLightStateProvider {...props}>{element}</DarkLightStateProvider>
  </IntlProvider>
)
