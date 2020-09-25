import React from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import { Router } from 'config/routes'

import { of, Subject } from 'rxjs'
import { StateObservable } from 'redux-observable'

import { driverList } from '../ducks/handler/list'
import { driverListCombinedEpic } from '../ducks/observables'

import Component from '../component'

class Container extends React.Component {
  static async getInitialProps(ctx) {
    const { store } = ctx
    const state$ = new StateObservable(new Subject(), store.getState())

    const list = await driverListCombinedEpic(
      of(driverList()),
      state$,
    ).toPromise()
    store.dispatch(list)

    if (list.payload && list.payload.error) {
      state$.value.DriverList.isError = true
    } else {
      state$.value.DriverList.data = list.payload.data
    }
    return {}
  }

  componentDidMount() {}

  render() {
    return (<Component {...this.props} />)
  }
}

Container.defaultProps = {
  serverData: {},
}

Container.propTypes = {
  serverData: PropTypes.shape({}),
}

export default Container
