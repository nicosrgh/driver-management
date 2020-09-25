const Passport = require('../server/passport')


function authGoogle(app) {
  return app.get('/auth/google', Passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.email ',
      'https://www.googleapis.com/auth/userinfo.profile ',
      'https://www.googleapis.com/auth/plus.me ',
    ],
    prompt: 'consent',
    authType: 'rerequest',
    accessType: 'offline',
  }))
}

function authGoogleCallback(app) {
  return app.get(
    '/auth/google/callback',
    Passport.authenticate('google', {
      failureRedirect: '/',
      // successRedirect: '/',
      session: false,
    }),
  )
}

const Auth = {
  authGoogle,
  authGoogleCallback,
}

module.exports = Auth
