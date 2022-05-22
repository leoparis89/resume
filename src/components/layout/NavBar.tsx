import {
  AppBar,
  Box,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { DARK_BG, LIGHT_BG, useThemeState } from '../../contexts/ThemeProvider'
import { useLang } from '../../contexts/IntlProvider'
import { Link } from '../common'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'

export const NavBar: React.FC = (props) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={80}
        alignItems="center"
      >
        <LangToggle />
        <ThemeToggle />
      </Box>
    </Container>
  )
}
