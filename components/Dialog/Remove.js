import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

function Component({
  name,
  item,
  handler,
  toggle,
}) {
  return (
    <Dialog
      open={toggle.name === 'removeitem' && toggle.open}
      onClose={handler.dialog('removeitem', toggle.open)}
      onBackdropClick={handler.dialog('removeitem', toggle.open)}
    >
      <DialogTitle>{`Remove ${name}?`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Are you sure you want to remove ${name} `}
          <span style={{ fontWeight: 'bold' }}>{item.name}</span>
          ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handler.dialog('removeitem', item, toggle.open)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handler.remove({ name: 'removeitem', ...toggle }, item.id)}
          color="primary"
          autoFocus
        >
          Yes, Remove!
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Component.propTypes = {
  item: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
  toggle: PropTypes.shape({}).isRequired,
  handler: PropTypes.shape({}).isRequired,
}

export const DialogRemove = Component

export default DialogRemove
