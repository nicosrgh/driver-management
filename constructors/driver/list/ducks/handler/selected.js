export const DRIVER_LIST_SELECTED = 'DRIVER_LIST_SELECTED'

const selected = {
  [DRIVER_LIST_SELECTED]: (state, { payload }) => ({
    ...state,
    selected: payload.data,
  }),
}

export function driverListSelected(data) {
  return {
    type: DRIVER_LIST_SELECTED,
    payload: { data },
  }
}

export default selected
