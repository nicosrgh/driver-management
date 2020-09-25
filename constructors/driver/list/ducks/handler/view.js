export const DRIVER_LIST_VIEW = 'DRIVER_LIST_VIEW'

const view = {
  [DRIVER_LIST_VIEW]: (state, { payload }) => ({
    ...state,
    view: payload.data,
  }),
}

export function driverListView(data) {
  return {
    type: DRIVER_LIST_VIEW,
    payload: { data },
  }
}

export default view
