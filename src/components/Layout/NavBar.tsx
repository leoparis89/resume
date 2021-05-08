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
import { ThemeToggle } from '../../contexts/themeToggle'
import { Link } from '../common'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()
  const lang = useLang()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {/* {lang} */}
            {/* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Lev Kowalski
            </Typography>
            <Link to="work">
              <Button>Experiences</Button>
            </Link>
            <Button>bar</Button>
            <ThemeToggle />
            {/* <BigLink to="/goo">Projets</BigLink>
            <BigLink to="/skills">Stack technique</BigLink>
            <BigLink to="/work">
              <Translate phrase="WORK" />
            </BigLink>
            {/* <BigLink to="/goo">Contact</BigLink> */}
            {/* <BigLink to="/goo">Formation</BigLink> */}
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
