const { matchedData } = require("express-validator")
const { usersModel } = require("../models")
const { encrypt } = require("../utils/handlePassword")
const { tokenSign } = require("../validators/handleJwt")
const { handleHttpError } = require("../utils/handleError")
const { compare } = require("bcryptjs")


const registerCtrl =  async (req, res) => {
  try {
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = { ...req, password: passwordHash }
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, { strict: false })
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER')
  }
}

const loginCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email}).select('password')

    if(!user){
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return
    }

    const hashPassword = user.get('password');

    const check = await compare(req.password, hashPassword)

    if(!check){
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return
    }

    const data = {
      token: await tokenSign(user),
      user
    }

    res.send({data})


  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_LOGIN_USER")
  }
}


module.exports = { registerCtrl, loginCtrl }