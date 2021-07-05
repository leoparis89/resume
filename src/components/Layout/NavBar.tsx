import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useLang } from '../../contexts/IntlContext'
import { Link } from '../common'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'
import TemporaryDrawer from './Drawer'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()
  const lang = useLang()

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
