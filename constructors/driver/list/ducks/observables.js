import { combineEpics, ofType } from 'redux-observable'
import { of, timer } from 'rxjs'
import {
  debounce,
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators'

import {
  snackbar,
} from 'ducks/Snackbar'
import apiCall from 'lib/api'
import {
  DRIVER_LIST,
  DRIVER_LIST_FAILURE,
  DRIVER_LIST_NEXT,
  driverListSuccess,
  driverListFailure,
  driverListNextSuccess,
  driverListNextFailure,

} from './handler/list'

import {
  DRIVER_LIST_SEARCH,
  driverListSearchSuccess,
  driverListSearchFailure,
} from './handler/search'


export function driverListEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(DRIVER_LIST),
      mergeMap(() => api({
        method: 'get',
        path: {
          url: 'DRIVER',
        },
        payloads: {
          query: {
            ...state$.value.DriverList.data.paging.query,
          },
        },
      })
        .pipe(
          map(({ response }) => driverListSuccess(response)),
          catchError((response) => of(driverListFailure({ message: response.xhr.statusText }))),
        )),
      catchError((response) => of(driverListFailure(response))),
    )
}

export function driverListFailureEpic(action$, state$) {
  return action$
    .pipe(
      ofType(DRIVER_LIST_FAILURE),
      map(() => snackbar('error', state$.value.DriverList.error.message)),
    )
}

export function driverListNextEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(DRIVER_LIST_NEXT),
      map(() => ({ isRemoved: false })),
      mergeMap((where) => api({
        method: 'get',
        path: {
          url: 'DRIVER',
        },
        payloads: {
          query: {
            ...state$.value.DriverList.data.paging.query,
            where,
          },
        },
      })
        .pipe(
          map(({ response }) => driverListNextSuccess(response)),
          catchError((response) => of(driverListNextFailure(response))),
        )),
      catchError((response) => of(driverListNextFailure(response))),
    )
}

export function driverListSearchEpic(action$, state$, { api }) {
  return action$
    .pipe(
      ofType(DRIVER_LIST_SEARCH),
      debounce(() => timer(1000)),
      map(() => ({
        query: {
          ...state$.value.DriverList.data.paging.query,
          where: { value: JSON.stringify(state$.value.DriverList.search.conditions) },
        },
      })),
      mergeMap((payloads) => api({
        method: 'get',
        path: {
          url: 'DRIVER',
        },
        payloads,
      })
        .pipe(
          map(({ response }) => driverListSearchSuccess(response)),
          catchError((response) => of(driverListSearchFailure(response))),
        )),
      catchError((response) => of(driverListSearchFailure(response))),
    )
}

export function driverListCombinedEpic(...args) {
  return combineEpics(
    driverListEpic,
  )(...args, { api: apiCall })
}
