const express = require('express')
const { matchedData } = require('express-validator')
const { validatorRegister } = require('../validators/authValidator')
const router = express.Router()

router
  .post('/register', validatorRegister, (req, res) => {
    req = matchedData(req)
    
  })




module.exports = router