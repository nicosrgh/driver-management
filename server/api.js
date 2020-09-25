const chalk = require('chalk')
const fetch = require('node-fetch')
const cors = require('cors')

const {
  api, env, client, localPort, server,
} = require('../config')

const serverHost = env === 'development'
  ? `${server.host}:${localPort}`
  : server.host

const corsOptions = {
  origin: serverHost,
  optionsSuccessStatus: 200,
}

function handleRefresh(refreshToken, res) {
  const uri = `${api.host}/auth/refresh`
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  }

  /* eslint-disable no-console */
  console.log(`${chalk.blue('[REFRESH CALL]:')} ${chalk.green(options.method)} ${chalk.white(uri)}`)
  console.log(`${chalk.green('[REFRESH BODY]:')} ${chalk.green(JSON.stringify(options))}`)
  /* eslint-enable no-console */

  return fetch(uri, options)
    .then(handleResponse)
    .then((response) => res.json(response))
    .catch((error) => res.status(error.code || 500).json(error))
}

function handleResponse(response) {
  return response.json()
    .then((json) => {
      if (response.ok) {
        return json
      }
      return Promise.reject(json)
    })
}

function handleOptions(body) {
  const {
    Authorization, method, path, payloads,
  } = body
  let uri = `${api.host}/${path}`

  const headers = {
    'Content-Type': 'application/json',
    clientId: client.id,
    clientSecret: client.secret,
  }

  const options = { method, headers }

  if (Authorization) {
    options.headers.Authorization = Authorization
  }

  if (method.toLowerCase() === 'get') {
    let queryString = ''

    if (payloads && payloads !== undefined) {
      const { params, query, ...other } = payloads
      let queryParams = {}
      queryParams = { ...other }

      if (payloads.params || payloads.query) {
        queryParams = {
          ...queryParams,
          string: JSON.stringify(payloads.params || payloads.query),
        }
      }

      Object.keys(queryParams).forEach((key) => {
        const data = queryParams[key]
        const qs = data instanceof Object ? JSON.stringify(data) : data
        if (queryString !== '') {
          queryString += '&'
        }
        queryString += `${key}=${qs}`
      })
    }

    if (queryString) {
      uri = `${uri}?${queryString}`
    }
  } else {
    options.body = JSON.stringify(payloads)
  }

  /* eslint-disable no-console */
  console.log(`${chalk.blue('[API CALL]:')} ${chalk.green(method)} ${chalk.white(uri)}`)
  console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
  /* eslint-enable no-console */

  return { uri, options }
}

function call(app) {
  return app.post('/call', cors(corsOptions), (req, res) => {
    const { body } = req
    const { uri, options } = handleOptions(body)

    return fetch(uri, options)
      .then(handleResponse)
      .then((response) => res.json(response))
      .catch((e) => {
        const { error } = e
        if (error) {
          const { code, message } = error
          if (code === 401 && message === 'TokenExpired') {
            res.statusMessage = message
            return res.status(code).send(message)
          }
          res.statusMessage = error.code ? error.message : 'Server error'
          return res.status(error.code || 500).send(error.message || 'Server error')
        }
        console.error(e)
        return res.status(500).send('Server error')
      })
  })
}

const Api = {
  call,
}

module.exports = Api
