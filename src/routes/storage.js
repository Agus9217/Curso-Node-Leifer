const express = require('express')
const { createItems, getItems, getItem, deleteItems } = require('../controller/storageController')
const uploadMiddleware = require('../utils/handleStorage')
const { validatorGetItem } = require('../validators/storageValidator')

const router = express.Router()


router
  .get('/', getItems)
  .get('/:id',validatorGetItem, getItem)
  .post('/', uploadMiddleware.single('myfile'), createItems)
  .delete('/:id', validatorGetItem, deleteItems)
  


module.exports = router