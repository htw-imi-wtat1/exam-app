
const config = require('./config')

// start mongoose
const mongoose = require('mongoose')
const mongoURI = config.mongoURI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!')
    console.log(mongoURI)
})

// start the server
const app = require('./app')
const server = app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})

// start the chat server on the server
const io = require('socket.io')(server)
require('./socket/chat')(io)