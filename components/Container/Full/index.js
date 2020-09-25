import React from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
} from '@material-ui/core'

import {
  Container,
} from 'components'

const styles = makeStyles(() => ({
  container: {
    width: '100%',
    marginBottom: '20px',
    '@media screen and (max-width: 767px)': {
      width: 'calc(100% - 30px)',
      margin: '0 auto',
    },
  },
}))

function Component({
  children,
  width,
  ...rest
}) {
  const classes = styles()
  return (
    <Container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
      {...rest}
    >
      {children}
    </Container>
  )
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Full = Component

export default Full
