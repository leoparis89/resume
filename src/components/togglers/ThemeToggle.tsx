import { colors, styled, Switch, withStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { ThemeStateContext } from '../../contexts/DarkLight'

import Toggle from 'react-toggle'

import { IoIosSunny, IoIosMoon } from 'react-icons/io'
import { NightsStay, WbSunny } from '@material-ui/icons'
export const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeStateContext)

  return <IOSSwitch onClick={toggleTheme} checked={dark} />
}

// const IOSSwitch = withStyles((theme) => ({
//   root: {
//     width: 42,
//     height: 26,
//     padding: 0,
//     margin: theme.spacing(1),
//   },
//   switchBase: {
//     padding: 1,
//     '&$checked': {
//       transform: 'translateX(16px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         backgroundColor: '#52d869',
//         opacity: 1,
//         border: 'none',
//       },
//     },
//     '&$focusVisible $thumb': {
//       color: '#52d869',
//       border: '6px solid #fff',
//     },
//   },
//   thumb: {
//     width: 24,
//     height: 24,
//   },
//   track: {
//     borderRadius: 26 / 2,
//     border: `1px solid ${theme.palette.grey[400]}`,
//     backgroundColor: theme.palette.grey[50],
//     opacity: 1,
//     transition: theme.transitions.create(['background-color', 'border']),
//   },
//   checked: {},
//   focusVisible: {},
// }))(({ classes, ...props }: any) => {
//   return (
//     <Switch
//       value
//       focusVisibleClassName={classes.focusVisible}
//       disableRipple
//       classes={{
//         root: classes.root,
//         switchBase: classes.switchBase,
//         thumb: classes.thumb,
//         track: classes.track,
//         checked: classes.checked,
//       }}
//       {...props}
//     />
//   )
// })

const Wrapper = styled('div')({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
})

export const IOSSwitch = (props) => (
  <Toggle
    onChange={props.onChange}
    icons={{
      unchecked: <NightsStay style={{ fontSize: 12 }} />,
      checked: <WbSunny style={{ fontSize: 12, color: colors.yellow[100] }} />,
    }}
  />
)
