const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')


const validatorRegister = [
  check('name')
  .exists()
  .notEmpty()
  .isLength({ min: 3, max: 17 }),
  

  check('age')
  .exists()
  .notEmpty()
  .isNumeric(),

  check('email')
  .exists()
  .notEmpty()
  .isEmail(),

  check('password')
  .exists()
  .notEmpty()
  .isLength({ min: 6, max: 15 }),

  (req, res, next) => validateResults(req, res, next)
]


const validatorLogin = [
  check('email')
  .exists()
  .notEmpty(),

  check('password')
  .exists()
  .notEmpty()
  .isLength({ min: 6, max: 15 }),


  (req, res, next) => validateResults(req, res, next)
]

module.exports = { validatorRegister, validatorLogin }