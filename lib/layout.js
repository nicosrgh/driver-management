import React from 'react'
import { connect } from 'react-redux'

import { snackbarClose } from 'ducks/Snackbar'

import NProgress from 'nprogress'

import PropTypes from 'prop-types'

import { withRouter } from 'next/router'

import { Router } from 'config/routes'

import Footer from 'components/Footer'
import Header from 'components/Header'

NProgress.configure({
  showSpinner: false,
})

const authRoutes = [
  '/driver_list',
]

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.Component {
    componentDidMount() {
      const { router } = this.props
      const { pathname } = router
      const authPages = authRoutes.includes(pathname)
      if (authPages) {
        Router.pushRoute('/')
      }
    }

    render() {
      const {
        router,
      } = this.props

      Router.onRouteChangeStart = () => NProgress.start()
      Router.onRouteChangeComplete = () => NProgress.done()
      Router.onRouteChangeError = () => NProgress.done()
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header
            {...this.props}
            visitedUsername="Shipper User"
          />
          <div style={{
            flex: '1 0 auto',
            paddingTop: '56px',
          }}
          >
            <WrappedComponent {...this.props} />
          </div>
          <Footer />
        </div>
      )
    }
  }

  WithLayout.defaultProps = {
    auth: {
      isAuthenticated: false,
    },
    router: {
      asPath: '',
      pathname: '',
    },
  }

  WithLayout.propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
    }),
    toggle: PropTypes.shape({}).isRequired,
    router: PropTypes.shape({
      asPath: PropTypes.string,
      pathname: PropTypes.string,
    }),
    goto: PropTypes.func.isRequired,
    handleToggleDrawer: PropTypes.func.isRequired,
    handleToggleError: PropTypes.func.isRequired,
    handleSnackbarClose: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state) => ({
    auth: state.Auth,
    toggle: state.Toggle,
    snackbar: state.Snackbar,
  })

  const mapDispatchToProps = (dispatch) => ({
    goto(data) {
      return (e) => {
        e.preventDefault()

        Router.pushRoute(data.page, data.params)
      }
    },
    handleSnackbarClose() {
      dispatch(snackbarClose())
    },
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(WithLayout))
}

export default withLayout
