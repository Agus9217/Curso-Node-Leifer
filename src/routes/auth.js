const express = require('express')
const { validatorRegister, validatorLogin } = require('../validators/authValidator')
const { registerCtrl, loginCtrl } = require('../controller/auth')
const router = express.Router()

router
  .post('/register', validatorRegister, registerCtrl)
  .post('/login', validatorLogin, loginCtrl)




module.exports = router