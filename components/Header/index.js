import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'

import { Link } from 'config/routes'

import MenuDrawer from './Menu/Drawer'


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

function Header(props) {
  const classes = styles()
  return (
    <AppBar position="fixed" color="inherit" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h1"
          color="inherit"
          className={classes.flex}
        >
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
        </Typography>
        {(<MenuDrawer {...props} />)}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
}

export default Header
