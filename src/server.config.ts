import { Server } from 'hapi'
import * as HapiPino from 'hapi-pino'
import { sayHello, sayHelloParam } from './routes'

export default async function config () {
  const server = new Server({
      port: 3000,
      host: 'localhost',
    })

  server.route({
    method: 'GET',
    path: '/',
    handler: sayHello
  })

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: sayHelloParam
  })

  await server.register({
    plugin: HapiPino,
    options: {
      prettyPrint: true,
      logEvents: ['response']
    }
  })


  return server
}
