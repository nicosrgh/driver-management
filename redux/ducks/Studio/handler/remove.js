export const DRIVER_REMOVE = 'DRIVER_REMOVE'
export const DRIVER_REMOVE_FAILURE = 'DRIVER_REMOVE_FAILURE'
export const DRIVER_REMOVE_SUCCESS = 'DRIVER_REMOVE_SUCCESS'

const remove = {
  [DRIVER_REMOVE]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    data: {
      ...state.data,
      id: payload.id,
    },
  }),
  [DRIVER_REMOVE_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [DRIVER_REMOVE_SUCCESS]: (state) => ({
    ...state,
    isLoading: false,
    isRemoved: true,
  }),
}

export function driverRemove(id) {
  return {
    type: DRIVER_REMOVE,
    payload: { id },
  }
}
export function driverRemoveFailure(error) {
  return {
    type: DRIVER_REMOVE_FAILURE,
    payload: { error },
  }
}
export function driverRemoveSuccess() {
  return {
    type: DRIVER_REMOVE_SUCCESS,
  }
}

export default remove
