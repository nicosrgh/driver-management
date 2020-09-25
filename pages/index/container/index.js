import React from 'react'
import PropTypes from 'prop-types'

import { Router } from 'config/routes'


import Component from '../component'


class Container extends React.Component {
  static async getInitialProps(ctx) {
    return { }
  }

  componentDidMount() {
    Router.pushRoute('/')
  }

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
