import { IconButton } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'
import React, { useContext } from 'react'
import { Theme, ThemeContext } from '../../contexts/DarkLight'
import { IOSSwitch } from './IOSSwitch'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    // <IconButton onClick={toggleTheme} style={{ cursor: 'pointer' }}>
    /* {theme === Theme.Dark ? <NightsStay /> : <WbSunny />} */
    <IOSSwitch onClick={toggleTheme} />
    // </IconButton>
  )
}
