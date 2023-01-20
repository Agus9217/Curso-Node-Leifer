const express = require('express')
const { usersModel } = require('../models')
const { matchedData } = require('express-validator')
const { encrypt } = require('../utils/handlePassword')
const { validatorRegister } = require('../validators/authValidator')
const { tokenSign } = require('../validators/handleJwt')
const router = express.Router()

router
  .post('/register', validatorRegister, async (req, res) => {
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = { ...req, password: passwordHash }
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, { strict: false })

    const data = {
      token: await tokenSign(),
      user: dataUser
    }


    res.send({ data })
  })




module.exports = router