import { combineReducers } from 'redux'

import DriverList from 'constructors/driver/list/ducks/reducer'

const appReducers = combineReducers({
  DriverList,
})

const rootReducers = (state, action) => appReducers(state, action)


export default rootReducers
