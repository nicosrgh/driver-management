import reducer from 'lib/reducer'

import list from './handler/list'
import search from './handler/search'
import selected from './handler/selected'
import view from './handler/view'

const initialState = {
  error: {},
  isError: false,
  isLoading: false,
  view: {
    grid: true,
  },
  data: {
    items: [],
    paging: {
      count: '0',
      totalPages: '0',
      currentPage: '20',
      query: {
        sort: {},
        limit: '20',
        skip: '0',
      },
    },
  },
  search: {
    conditions: {},
    isSearching: false,
    isLoading: false,
    keyword: '',
  },

  selected: {
    id: '',
    name: '',
    slug: '',
  },
}

const DriverList = reducer(
  Object.assign(
    list,
    search,
    selected,
    view,
  ),
  initialState,
)

export default DriverList
