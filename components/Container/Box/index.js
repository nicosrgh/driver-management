import React from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
} from '@material-ui/core'

import {
  Container,
  ContainerItem,
} from 'components'

const styles = makeStyles(() => ({
  container: {
    width: '100%',
    marginBottom: '70px',
  },
}))

function Component({
  children,
  itemStyle,
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
      <ContainerItem sm={12} md={10} style={itemStyle}>
        {children}
      </ContainerItem>
    </Container>
  )
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Box = Component

export default Box
