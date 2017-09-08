const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.listen(process.env.port || 8081)
