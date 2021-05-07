import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Button,
  Container,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { Link } from '../common'

export const NavBar: React.FC = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
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
            <Button>Login</Button>
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