const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')

require('babel-core/register')({
  presets: ['react', 'env']
});

const server = new Hapi.Server({
  host: 'localhost',
  port: 31337
});

const provision = async () => {

  await server.register([Inert, Vision])

  server.views({
    engines: {
      jsx: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'views'
  })

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'assets',
        index: ['index.html']
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: 'Default'
    }
  })

  await server.start()
  
  console.log('Server running at:', server.info.uri);

}

provision()