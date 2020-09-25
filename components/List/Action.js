import React from 'react'
import PropTypes from 'prop-types'

import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core'


import { fade, makeStyles } from '@material-ui/core/styles'

import {
  ContainerItem,
} from 'components'


import {
  Magnify,
  FormatListBulletedSquare,
  ViewGrid,
} from 'mdi-material-ui'

const styles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    marginBottom: '10px',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: '100%',
    },
    '@media screen and (max-width: 767px)': {
      marginRight: 0,
    },
  },
  searchInput: {
    '@media screen and (max-width: 767px)': {
      width: '100%',
    },
  },
  sectionDesktop: {
    display: 'flex',
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
  searchLoading: {
    color: '#6798e5',
    animationDuration: '550ms',
  },
  searchLoadingRoot: {
    height: '21px !important',
  },
}))

function Component({
  handler,
  name,
  search,
  view,
}) {
  const classes = styles()

  return (
    <ContainerItem xs={12} sm={10} md={10} className={classes.bar}>
      <div className={classes.search}>
        <TextField
          className={classes.searchInput}
          label="Search"
          margin="dense"
          name={name}
          placeholder="Search"
          variant="outlined"
          value={search.keyword}
          onChange={handler.search(search)}
          InputProps={{
            endAdornment: search.isLoading
              ? (
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  className={classes.searchLoading}
                  size={24}
                  thickness={4}
                  classes={{
                    root: classes.searchLoadingRoot,
                  }}
                />
              )
              : <InputAdornment position="end"><Magnify style={{ color: 'rgba(0, 0, 0, 0.54)' }} /></InputAdornment>,
          }}
        />
      </div>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton
          onClick={handler.view(view.grid)}
          disabled={view.grid === false}
        >
          <FormatListBulletedSquare />
        </IconButton>
        <IconButton
          onClick={handler.view(view.grid)}
          disabled={view.grid === true}
        >
          <ViewGrid />
        </IconButton>
      </div>
    </ContainerItem>
  )
}

Component.propTypes = {
  handler: PropTypes.shape({
    search: PropTypes.func.isRequired,
    view: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  search: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    keyword: PropTypes.string.isRequired,
  }).isRequired,
  view: PropTypes.shape({
    grid: PropTypes.bool.isRequired,
  }).isRequired,
}

export const ListAction = Component

export default ListAction
