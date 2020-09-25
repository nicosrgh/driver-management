module.exports = {
  app: {
    name: process.env.APP_NAME,
    quotes: process.env.APP_QUOTES,
  },
  api: {
    host: process.env.API_HOST,
  },
  baseUrl: process.env.APP_BASE_URL,
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  env: process.env.NODE_ENV,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  },
  firebase: {
    key: process.env.FIREBASE_KEY,
    url: {
      notification: process.env.FIREBASE_URL_NOTIFICATION,
    },
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    domain: process.env.GOOGLE_CLIENT_DOMAIN,
    scope: process.env.GOOGLE_CLIENT_SCOPE,
    storagePublicUrl: process.env.GOOGLE_STORAGE_PUBLIC_URL,
  },
  port: process.env.APP_PORT,
  localPort: process.env.APP_LOCAL_PORT,
  server: {
    auth: process.env.SERVER_AUTH,
    host: process.env.SERVER_HOST,
    call: process.env.SERVER_CALL,
    firebase: process.env.SERVER_FIREBASE,
    signout: process.env.SERVER_CALL_SIGNOUT,
  },
  REACT_SPINKIT_NO_STYLES: process.env.REACT_SPINKIT_NO_STYLES,
}
