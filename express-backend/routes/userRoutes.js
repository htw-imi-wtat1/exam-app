const router = require('express').Router()
const usersController = require('../controllers/usersController')

router.get('/login', usersController.login)
router.post('/login', usersController.authenticate)
router.get('/logout', usersController.logout, usersController.redirectView)
router.get('/', usersController.index, usersController.indexView)
router.get('/new', usersController.new)
router.post('/', usersController.validations, usersController.create, usersController.redirectView)
router.get('/:id/edit', usersController.edit)
router.put('/:id', usersController.update, usersController.redirectView)
router.get('/:id', usersController.show, usersController.showView)
router.delete('/:id', usersController.delete, usersController.redirectView)
module.exports = router
