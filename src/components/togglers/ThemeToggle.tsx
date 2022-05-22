import { colors } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'
import React, { useContext } from 'react'
import Toggle from 'react-toggle'
import { ThemeStateContext } from '../../contexts/ThemeProvider'

export const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeStateContext)

  return <IOSSwitch onChange={toggleTheme} checked={!dark} />
}

export const IOSSwitch = (props) => (
  <Toggle
    onChange={props.onChange}
    checked={props.checked}
    icons={{
      unchecked: <NightsStay style={{ fontSize: 12 }} />,
      checked: <WbSunny style={{ fontSize: 12, color: colors.yellow[100] }} />,
    }}
  />
)
