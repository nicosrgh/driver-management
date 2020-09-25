import { connect } from 'react-redux'

import {
  driverListNext,
} from './ducks/handler/list'
import {
  driverListSearch,
  driverListSearchConditions,
  driverListSearchKeyword,
} from './ducks/handler/search'


import {
  driverListView,
} from './ducks/handler/view'


import Container from './container'


function mapStateToProps(state) {
  return {
    auth: state.Auth,
    data: state.DriverList.data,
    error: state.DriverList.error,
    isError: state.DriverList.isError,
    isLoading: state.DriverList.isLoading,
    search: state.DriverList.search,
    selected: state.DriverList.selected,
    view: state.DriverList.view,


    driver: state.Driver.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handler: {
      next(paging) {
        return (e) => {
          e.preventDefault()
          const { skip, limit, sort } = paging.query
          const query = {
            skip: parseInt(skip, 10) + parseInt(limit, 0),
            limit: parseInt(limit, 0),
            sort,
          }
          dispatch(driverListNext(query))
        }
      },
      search({ isSearching, conditions }) {
        return (e) => {
          const { value } = e.target

          if (value.length > 2) {
            let condition = {
              slug: {
                $regex: value,
              },
            }
            condition = Object.assign(conditions, condition)
            dispatch(driverListSearchConditions(condition))
          }
          dispatch(driverListSearchKeyword(value))

          if (value.length > 2) {
            dispatch(driverListSearch())
          }
          if (value.length === 0 && isSearching) {
            dispatch(driverListSearchConditions({}))
            dispatch(driverListSearch())
          }
        }
      },
      view(grid) {
        return (e) => {
          e.preventDefault()
          dispatch(driverListView({ grid: !grid }))
        }
      },
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
