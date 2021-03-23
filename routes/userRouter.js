const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

// 2 rotas, uma pra fazer login e a outra pra registrar
router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router