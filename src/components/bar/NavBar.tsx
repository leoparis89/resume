import {
  AppBar,
  Button,
  colors,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useThemeState } from '../../contexts/DarkLight'
import { useLang } from '../../contexts/IntlContext'
import { Link } from '../common'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'
import TemporaryDrawer from './Drawer'

const DARK_BG = 'rgb(22 27 79)'
const LIGHT_BG = '#dcefed'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()
  const lang = useLang()

  const { dark } = useThemeState()

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        style={{ background: dark ? DARK_BG : LIGHT_BG }}
      >
        <Container>
          <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
            <TemporaryDrawer />
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
