import { combineEpics } from 'redux-observable'
import { Router as navigate } from 'config/routes'

import api from 'lib/api'
import nprogress from 'lib/nprogress'
import * as auth from 'lib/auth'


import * as DriverEpics from 'observables/Driver'
import * as DriverListEpics from 'constructors/driver/list/ducks/observables'

function rootEpics(...args) {
  const dependencies = {
    api,
    auth,
    navigate,
    nprogress,
  }
  const allEpics = [
    ...Object.values(DriverEpics),
    ...Object.values(DriverListEpics),
  ]

  return combineEpics(...allEpics)(...args, dependencies)
}

export default rootEpics
