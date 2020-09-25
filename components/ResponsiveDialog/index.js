import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core'

function Component(props) {
  const {
    title,
    body,
    cancelText,
    cancelColor,
    children,
    confirmText,
    confirmColor,
    disableConfirm,
    isOpen,
    onCancel,
    onConfirm,
    onClose,
    fullScreen,
  } = props

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={(onClose === null) ? onCancel : onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {body}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onCancel} color={cancelColor}>
          {cancelText}
        </Button>
        <Button variant="contained" onClick={onConfirm} color={confirmColor} autoFocus disabled={disableConfirm}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Component.defaultProps = {
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmColor: 'primary',
  cancelColor: 'primary',
  children: null,
  disableConfirm: false,
  onClose: null,
}

Component.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  confirmColor: PropTypes.string,
  cancelColor: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.element,
  disableConfirm: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  fullScreen: PropTypes.bool.isRequired,
}


export const ResponsiveDialog = withMobileDialog()(Component)

export default ResponsiveDialog
