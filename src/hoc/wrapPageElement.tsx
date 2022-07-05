import React from 'react'
import { DarkLightStateProvider } from '../contexts/ThemeProvider'

export const wrapPageElement = ({ element, props }) => (
  <DarkLightStateProvider {...props}>{element}</DarkLightStateProvider>
)
