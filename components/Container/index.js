import React from 'react'
import PropTypes from 'prop-types'

import {
  Grid,
  makeStyles,
} from '@material-ui/core'

import { Box } from './Box'
import { Full } from './Full'
import { Item } from './Item'

const styles = makeStyles(() => ({
  root: {
    // height: '100%',
  },
}))

function Component({
  children,
  width,
  ...rest
}) {
  const classes = styles()

  return (
    <div className={classes.root}>
      <Grid
        container
        style={width ? { maxWidth: width } : {}}
        {...rest}
      >
        {children}
      </Grid>
    </div>
  )
}

Component.defaultProps = {
  width: '',
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}

export const Container = Component
export const ContainerBox = Box
export const ContainerFull = Full
export const ContainerItem = Item

export default Container
