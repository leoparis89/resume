import React from 'react'
import { DarkLightStateProvider } from './ThemeProvider'

export const wrapPageElement = ({ element, props }) => (
  <DarkLightStateProvider {...props}>{element}</DarkLightStateProvider>
)
