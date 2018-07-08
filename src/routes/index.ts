import { Lifecycle } from  'hapi'

export const sayHello: Lifecycle.Method = (req, h) => (
  'Hello World!'
)

export const sayHelloParam: Lifecycle.Method = (req, h) => (
  `Hello ${encodeURIComponent(req.params.name)}!`
)