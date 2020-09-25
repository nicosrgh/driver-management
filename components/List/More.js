import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  makeStyles,
} from '@material-ui/core'

import {
  ContainerItem,
} from 'components'

const styles = makeStyles(() => ({
  button: { textAlign: 'center', margin: '20px' },
}))

function Component({
  handler,
  data,
}) {
  const classes = styles()
  return data.paging.totalPages > 1 && data.paging.totalPages !== data.paging.currentPage && (
    <ContainerItem xs={12} className={classes.button}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handler.next(data.paging)}
      >
        Load more
      </Button>
    </ContainerItem>
  )
}

Component.propTypes = {
  handler: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
}

export const ListMore = Component

export default ListMore
