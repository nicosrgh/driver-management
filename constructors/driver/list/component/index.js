import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import withLayout from 'lib/layout'

import {
  Fab,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core'

import {
  ContainerFull,
  ContainerItem,
  Heading,
  List,
  LoadingLinear,
} from 'components'

import {
  Add,
  Delete,
} from '@material-ui/icons'

const styles = makeStyles((theme) => ({
  center: {
    textAlign: 'center',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  input: {
    marginTop: 0,
    marginBottom: 0,
    margin: '8px',
  },
  right: {
  },
  hovered: {
    background: 'rgba(0, 0, 0, 0.08)',
  },
}))

function Component(props) {
  const classes = styles()
  const {
    goto,
    handler,
    isLoading,
    driver,
  } = props

  return (
    <ContainerFull>
      {isLoading && <LoadingLinear />}
      <ContainerItem xs={12} className={classes.center}>
        <Heading textAlign="center" title="Drivers" subheading="List of drivers" />
      </ContainerItem>


      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <List
        {...props}
        name="driver"
        header={{
          subheader: (i) => (<>{moment(i.createdAt, 'YYYY-MM-DD HH:mm:ss').format('dddd, MMMM Do YYYY')}</>),
          title: (i) => (
            <Link
              component="button"
              variant="h6"
              // onClick={goto({ page: 'driver', params: { id: i.id } })}
              style={{ padding: 0, lineHeight: 1, fontWeight: 'bold' }}
              color="textPrimary"
            >
              {i.name}
            </Link>
          ),
        }}
        searchPlaceholder="Search driver by name"
        itemContent={(i) => (
          <>
            <Typography variant="body2">
              {`Name: ${i.name}`}
            </Typography>
          </>
        )}
      />
      {/* eslint-enable jsx-a11y/anchor-is-valid */}


      <Fab color="primary" aria-label="add" className={classes.fab} onClick={goto({ page: 'driver_add', params: { } })}>
        <Add />
      </Fab>
    </ContainerFull>
  )
}

Component.propTypes = {
  goto: PropTypes.func.isRequired,
  handler: PropTypes.shape({
    dialog: PropTypes.func.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  driver: PropTypes.shape({}).isRequired,
}

export default withLayout(Component)
