import React from 'react'
import PropTypes from 'prop-types'

import {
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import {
  Account,
  Home,
  Calendar,
} from 'mdi-material-ui'

import { Link } from 'config/routes'

const menus = [
  {
    route: 'home',
    text: 'Beranda',
    icon: (<Home />),
  },
  {
    route: 'driver_list',
    text: 'Driver Management',
    icon: (<Account />),
  },
  {
    route: 'driver_list',
    text: 'Pickup',
    icon: (<Calendar />),
  },
]


const styles = makeStyles((theme) => ({
  bar: {
    height: '56px',
    background: theme.palette.primary.light,
    minHeight: '56px',
    boxShadow: '0px 2px 2px rgba(66, 66, 66, 0.08)',
  },
  flex: {
    flex: 1,
    fontSize: '1rem',
  },
  logo: {
    width: '40px',
  },
  toolbar: {
    minHeight: '56px',
    '@media screen and (min-width: 600px)': {
      minHeight: '56px',
    },
  },
}))

function MenuDrawer({
  goto,
}) {
  const classes = styles()

  const sideList = () => (
    <div
      role="presentation"
    >

      <List style={{ padding: 0 }}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <Link route="home">
          <a>
            <img
              src={process.env.APP_LOGO_MAIN}
              alt={`${process.env.APP_COMPANY_NAME} logo`}
              className={classes.logo}

            />
          </a>
        </Link>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </List>
      <Divider />
      {menus.map((menu, i) => (
        <List key={i.toString()} style={{ padding: 0 }}>
          <ListItem button onClick={goto({ page: menu.route, params: { } })}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItem>
        </List>
      ))}
    </div>
  )

  return (
    <>
      <IconButton
        color="default"
        aria-owns={null}
        aria-haspopup="true"
      >
        <Account />
      </IconButton>
      <Drawer anchor="left" variant="permanent">
        {sideList()}
      </Drawer>
    </>
  )
}

MenuDrawer.propTypes = {
  goto: PropTypes.func.isRequired,
}

export default MenuDrawer
