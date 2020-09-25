export const DRIVER_LIST_SEARCH_CONDITIONS = 'DRIVER_LIST_SEARCH_CONDITIONS'
export const DRIVER_LIST_SEARCH_KEYWORD = 'DRIVER_LIST_SEARCH_KEYWORD'

export const DRIVER_LIST_SEARCH = 'DRIVER_LIST_SEARCH'
export const DRIVER_LIST_SEARCH_FAILURE = 'DRIVER_LIST_SEARCH_FAILURE'
export const DRIVER_LIST_SEARCH_SUCCESS = 'DRIVER_LIST_SUCCESS'


const search = {
  [DRIVER_LIST_SEARCH_CONDITIONS]: (state, { payload }) => ({
    ...state,
    search: {
      ...state.search,
      isSearching: true,
      conditions: payload.data,
    },
  }),
  [DRIVER_LIST_SEARCH_KEYWORD]: (state, { payload }) => ({
    ...state,
    search: {
      ...state.search,
      isSearching: true,
      keyword: payload.data,
    },
  }),
  [DRIVER_LIST_SEARCH]: (state) => ({
    ...state,
    search: {
      ...state.search,
      isLoading: true,
    },
  }),
  [DRIVER_LIST_SEARCH_FAILURE]: (state, { payload }) => ({
    ...state,
    isError: true,
    error: {
      message: payload.error.message,
    },
    search: {
      ...state.search,
      isSearching: false,
      isLoading: false,
    },
  }),
  [DRIVER_LIST_SEARCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    data: payload.data,
    search: {
      ...state.search,
      isSearching: false,
      isLoading: false,
    },
  }),

}

export function driverListSearchConditions(data) {
  return {
    type: DRIVER_LIST_SEARCH_CONDITIONS,
    payload: { data },
  }
}


export function driverListSearchKeyword(data) {
  return {
    type: DRIVER_LIST_SEARCH_KEYWORD,
    payload: { data },
  }
}


export function driverListSearch() {
  return {
    type: DRIVER_LIST_SEARCH,
  }
}
export function driverListSearchFailure(error) {
  return {
    type: DRIVER_LIST_SEARCH_FAILURE,
    payload: { error },
  }
}
export function driverListSearchSuccess(data) {
  return {
    type: DRIVER_LIST_SEARCH_SUCCESS,
    payload: { data },
  }
}

export default search
