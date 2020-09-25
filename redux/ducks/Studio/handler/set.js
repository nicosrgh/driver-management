export const DRIVER_SET = 'DRIVER_SET'

const set = {
  [DRIVER_SET]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    data: payload.data,
  }),
}

export function driverSet(data) {
  return {
    type: DRIVER_SET,
    payload: { data },
  }
}

export default set
