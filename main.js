const fastify = require('fastify')({ logger: true })

const cars = ["BMW", "GMC", "TOYOTA"];
const phone = ["iphone", "galexy", "nocia"];
const sports = ["fooball", "teenes", "basktball"];
// Declare a route

fastify.get('/', async (request, reply) => {
  return { HEY: " MOMMY, LOVE YOU" }
})

fastify.post('/cars', async (request, reply) => {
  cars.push(request.body)
  return cars;
})


fastify.delete('/cars', async (request, reply) => {
  cars.pop()
  return cars;
})

fastify.get('/phone', async (request, reply) => {
  return phone;
})

fastify.get('/sports', async (request, reply) => {
  return sports;
})

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';
const port = process.env.$PORT || process.env.PORT || 3000;
// Run the server!
const start = async () => {
  try {
    await fastify.listen({
      port: port,
      host: host,
    });
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()