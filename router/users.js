const {Router} = require('express')
const usersController = require('../controllers/users-controller')
const router = Router()

router.get('/', usersController.getUsers)
router.get('/load', usersController.getUsers2)
router.get('/bonus', usersController.getUserOne)

module.exports = router
