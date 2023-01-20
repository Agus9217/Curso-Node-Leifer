const express = require('express')
const { usersModel } = require('../models')
const { matchedData } = require('express-validator')
const { encrypt } = require('../utils/handlePassword')
const { validatorRegister } = require('../validators/authValidator')
const router = express.Router()

router
  .post('/register', validatorRegister, async (req, res) => {
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = { ...req, password: passwordHash }
    const data = await usersModel.create(body)
    data.set('password', undefined, { strict: false })
    res.send({ data })
  })




module.exports = router