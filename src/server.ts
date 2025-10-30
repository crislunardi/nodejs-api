import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return { message: 'Hello, World!' }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    process.exit(1)
  })
