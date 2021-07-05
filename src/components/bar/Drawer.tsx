import { Divider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { Build, Computer, LocalLibrary } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React from 'react'
import { useTranslator } from '../../wording'
import { Link } from '../common'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => {
    const translator = useTranslator()

    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
        <List>
          <Link to="/work">
            <ListItem button>
              <ListItemIcon>{<Computer />}</ListItemIcon>
              <ListItemText primary={translator('WORK')} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/education">
            <ListItem button>
              <ListItemIcon>{<LocalLibrary />}</ListItemIcon>
              <ListItemText primary={translator('EDUCATION')} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/work">
            <ListItem button>
              <ListItemIcon>{<Build />}</ListItemIcon>
              <ListItemText primary={translator('TECH_STACK')} />
            </ListItem>
          </Link>
        </List>
      </div>
    )
  }

  const anchor = 'left'

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={anchor as any}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
