const router = require('express').Router()
const express = require('express')

const indexController = require('../controllers/indexController')
const chatController = require('../controllers/chatController')
const layouts = require('express-ejs-layouts')
const path = require('path')
const methodOverride = require('method-override')

const passport = require('passport')

const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const connectFlash = require('connect-flash')

const devSessionSecret = 'non_secure_session_secret'
const sessionSecret = process.env.SESSION_SECRET || devSessionSecret
if ((sessionSecret === devSessionSecret) && (process.env.NODE_ENV === 'production')) {
    console.log('WARNING! using unsecure default SESSION_SECRET')
}
router.use(express.static(path.join(__dirname, '../public')))


router.use(connectFlash())

router.use(cookieParser(sessionSecret))
router.use(expressSession({
    secret: sessionSecret,
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

router.use(
    methodOverride('_method', {
        methods: ['POST', 'GET']
    })
)

router.use(layouts)

router.use(
    express.urlencoded({
        extended: false
    })
)

router.use(express.json())

router.get('/chat', chatController.chat)
router.get('/', indexController.index)

module.exports = router