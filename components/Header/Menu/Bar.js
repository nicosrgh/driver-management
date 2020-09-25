import React from 'react'
import PropTypes from 'prop-types'

import {
  IconButton,
  // makeStyles,
} from '@material-ui/core'
import {
  Home,
} from 'mdi-material-ui'


// const styles = makeStyles(() => ({
//   smallAvatar: {
//     width: 32,
//     height: 32,
//   },
// }))

function MenuBar({
  goto,
}) {
  // const classes = styles()

  return (
    <>
      <IconButton
        color="default"
        aria-owns={null}
        aria-haspopup="true"
        onClick={goto({ page: 'home', params: { } })}
      >
        <Home />
      </IconButton>
    </>
  )
}

MenuBar.propTypes = {
  goto: PropTypes.func.isRequired,
}

export default MenuBar
