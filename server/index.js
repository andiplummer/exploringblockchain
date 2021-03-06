const express = require('express')
const app = express()
const path = require('path')
const {db}  = require('./db/index')

const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const port = process.env.PORT || 3000
async function startServer() {
  await db.sync()
  app.listen(port, function () {
    console.log(`Listening on port ${port} at http://localhost:${port}/`)
  })
}

startServer()

module.exports = app