const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const config = require("./config")
const mongoose = require('mongoose')


console.log("config: "+JSON.stringify(config))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
    console.log("ping - need to pong!")
    return res.json({data: 'pong'});
});

app.use(express.static(path.join(__dirname, '..','build')))

const server = app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})

const io = require('socket.io')(server)
require('./socket/chat')(io)

const {mongoURI} = require('./config')
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!')
})

const passport = require('passport')
const User = require('./models/user')
const helmet = require('helmet')
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'"],
        upgradeInsecureRequests: true
    }
}))

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const authenticationProxy = require('./proxies/authenticationProxy')
authenticationProxy.defineProxy(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// const morgan = require('morgan')
// app.use(morgan(':method :url :status * :response-time ms'))

const router = require('./routes/index')
app.use('/', router)

module.exports = app
