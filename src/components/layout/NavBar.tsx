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
import { DARK_BG, LIGHT_BG, useThemeState } from '../../contexts/DarkLight'
import { useLang } from '../../contexts/IntlContext'
import { Link } from '../common'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'
import TemporaryDrawer from './Drawer'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()
  const lang = useLang()

  const { dark } = useThemeState()

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={60}
        alignItems="center"
      >
        <LangToggle />
        <ThemeToggle />
      </Box>
    </Container>
  )

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        style={{ background: dark ? DARK_BG : LIGHT_BG }}
      >
        <Container>
          <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
            {/* <TemporaryDrawer /> */}
            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <Button>Lev Kowalski</Button>
              </Link>
            </Typography>
            <LangToggle />
            <ThemeToggle />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
