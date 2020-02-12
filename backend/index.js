const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  const db = require('./queries')
  app.get('/api/users', db.getUsers)
  app.get('/api/users/:id', db.getUserById)
  app.post('/api/users', db.createUser)
  app.put('/api/users/:id', db.updateUser)
  app.delete('/api/users/:id', db.deleteUser)