const express = require('express')
const { createItems, getItems, getItem } = require('../controller/storageController')
const uploadMiddleware = require('../utils/handleStorage')
const router = express.Router()


router
  .get('/', getItems)
  .get('/:id', getItem)
  .post('/', uploadMiddleware.single('myfile'), createItems)
  


module.exports = router