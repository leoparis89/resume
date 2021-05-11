import {
  AppBar,
  Button,
  Container,
  InputAdornment,
  makeStyles,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useLang } from '../../contexts/IntlContext'
import { ThemeToggle } from '../togglers/ThemeToggle'
import { Link } from '../common'
import LangToggle from '../togglers/LangToggle'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()
  const lang = useLang()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Lev Kowalski</Link>
            </Typography>
            <Link to="/work">
              <Button>Experiences</Button>
            </Link>
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
