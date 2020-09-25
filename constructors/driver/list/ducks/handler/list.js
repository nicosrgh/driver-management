export const DRIVER_LIST = 'DRIVER_LIST'
export const DRIVER_LIST_FAILURE = 'DRIVER_LIST_FAILURE'
export const DRIVER_LIST_SUCCESS = 'DRIVER_LIST_SUCCESS'

export const DRIVER_LIST_NEXT = 'DRIVER_LIST_NEXT'
export const DRIVER_LIST_NEXT_SUCCESS = 'DRIVER_LIST_NEXT_SUCCESS'
export const DRIVER_LIST_NEXT_FAILURE = 'DRIVER_LIST_NEXT_FAILURE'

export const DRIVER_LIST_REMOVE = 'DRIVER_LIST_REMOVE'
export const DRIVER_LIST_REMOVE_FAILURE = 'DRIVER_LIST_REMOVE_FAILURE'
export const DRIVER_LIST_REMOVE_SUCCESS = 'DRIVER_LIST_REMOVE_SUCCESS'

const list = {
  [DRIVER_LIST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [DRIVER_LIST_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [DRIVER_LIST_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: payload.data,
  }),

  [DRIVER_LIST_NEXT]: (state, { payload }) => ({
    ...state,
    data: {
      ...state.data,
      paging: {
        ...state.data.paging,
        query: payload.query,
      },
    },
    isLoading: true,
  }),
  [DRIVER_LIST_NEXT_FAILURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: {
      message: payload.error.message,
    },
  }),
  [DRIVER_LIST_NEXT_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: {
      ...payload.data,
      items: [...state.data.items, ...payload.data.items],
    },
  }),
}

export function driverList() {
  return {
    type: DRIVER_LIST,
  }
}
export function driverListFailure(error) {
  return {
    type: DRIVER_LIST_FAILURE,
    payload: { error },
  }
}
export function driverListSuccess(data) {
  return {
    type: DRIVER_LIST_SUCCESS,
    payload: { data },
  }
}

export function driverListNext(query) {
  return {
    type: DRIVER_LIST_NEXT,
    payload: { query },
  }
}
export function driverListNextSuccess(data) {
  return {
    type: DRIVER_LIST_NEXT_SUCCESS,
    payload: { data },
  }
}
export function driverListNextFailure(error) {
  return {
    type: DRIVER_LIST_NEXT_FAILURE,
    payload: { error },
  }
}
export function driverListRemove(id) {
  return {
    type: DRIVER_LIST_REMOVE,
    payload: { id },
  }
}
export function driverListRemoveFailure(error) {
  return {
    type: DRIVER_LIST_REMOVE_FAILURE,
    payload: { error },
  }
}
export function driverListRemoveSuccess() {
  return {
    type: DRIVER_LIST_REMOVE_SUCCESS,
  }
}

export default list
