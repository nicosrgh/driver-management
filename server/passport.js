const chalk = require('chalk')
const passport = require('passport')
const fetch = require('node-fetch')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const {
  baseUrl, env, api, google, localPort, server, client,
} = require('../config')

const callbackURLGoogle = env === 'development'
  ? `${baseUrl}:${localPort}${server.auth}/google/callback`
  : `${baseUrl}${server.auth}/google/callback`

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new GoogleStrategy(
  {
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: callbackURLGoogle,
    passReqToCallback: true,
  },
  ((request, accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          user: {
            email: profile.emails[0].value,
            fullname: `${profile.name.givenName} ${profile.name.familyName}`,
            password: '',
            phoneNumber: '',
            profilePic: profile.photos[0].value,
          },
          provider: {
            name: profile.provider,
            accessToken,
            refreshToken,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
          clientId: client.id,
          clientSecret: client.secret,
        },
      }
      const uri = `${api.host}/auth/signin/social`

      /* eslint-disable no-console */
      console.log(`${chalk.blue('[API CALL]:')} ${chalk.green('POST')} ${chalk.white(uri)}`)
      console.log(`${chalk.green('[BODY]:')} ${chalk.green(JSON.stringify(options))}`)
      /* eslint-enable no-console */

      return fetch(uri, options)
        .then((response) => response.json())
        .then((response) => done(null, response))
        .catch((error) => done(error, null))
    })
  }),
))

const Passport = passport

module.exports = Passport
