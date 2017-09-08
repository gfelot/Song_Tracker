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

app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `Hello ${req.body.email}, you have just been register !`
  })
})

app.listen(process.env.port || 8081)
