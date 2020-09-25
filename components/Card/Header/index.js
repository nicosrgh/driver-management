import React from 'react'
import PropTypes from 'prop-types'

import {
  CardHeader,
  makeStyles,
} from '@material-ui/core'

const styles = makeStyles((theme) => ({
  blue: {
    backgroundColor: theme.palette.default.main,
  },
  default: {
    backgroundColor: theme.palette.default.dark,
  },
  green: {
    backgroundColor: theme.palette.primary.main,
  },
  purple: {
    backgroundColor: theme.palette.purple.main,
  },
  red: {
    backgroundColor: theme.palette.red.main,
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'capitalize',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  titleRandom: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'capitalize',
    color: theme.palette.default.main,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  subheader: {
  },
  subheaderRandom: {
    color: theme.palette.default.main,
  },
}))

function Component(props) {
  const {
    action,
    avatar,
    random,
    title,
    subheader,
    style,
    ...rest
  } = props

  const classes = styles()
  const backgrounds = ['blue', 'green', 'purple', 'red']
  const background = random
    ? backgrounds[Math.floor(Math.random() * (backgrounds.length - 1))]
    : 'default'
  const t = random ? 'titleRandom' : 'title'
  const s = random ? 'subheaderRandom' : 'subheader'

  return (
    <CardHeader
      classes={{
        root: classes[background],
        subheader: classes[s],
        title: classes[t],
      }}
      avatar={avatar}
      action={action}
      title={title}
      subheader={subheader}
      style={{
        textAlign: 'left',
        ...style,
      }}
      {...rest}
    />
  )
}

Component.defaultProps = {
  random: false,
  action: [],
  avatar: null,
  title: {},
  subheader: null,
  style: {},
}
Component.propTypes = {
  random: PropTypes.bool,
  action: PropTypes.node,
  avatar: PropTypes.node,
  title: PropTypes.shape({}),
  subheader: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

export const Header = Component

export default Header
