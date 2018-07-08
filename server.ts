import configServer from './src/server.config'

const init = async () => {
  const server = await configServer()

  await server.start()
  server.log(['start'], `Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  // tslint:disable-next-line no-console
  console.log(err)
  process.exit(1)
})

init()