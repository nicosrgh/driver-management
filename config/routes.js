const routes = require('next-routes')()

routes
  .add('_healthz', '/_healthz', '_healthz')
  .add('driver_list', '/driver', 'driver_list')
  .add('home', '/', 'index')

module.exports = routes
