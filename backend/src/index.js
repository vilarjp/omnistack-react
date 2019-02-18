const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Create your own account at https://mlab.com/ and
// replace the gql-ninja:test123 with your infos
mongoose.connect('mongodb://omnistack:test123@ds221435.mlab.com:21435/omnistack', { useNewUrlParser: true })

app.use((req, res, next) => {
  req.io = io
  return next()
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
  console.log('server started on port 3000')
})
