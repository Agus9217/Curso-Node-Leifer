const express = require('express')
const { createItems } = require('../controller/storageController')
const uploadMiddleware = require('../utils/handleStorage')
const router = express.Router()

router.post('/', uploadMiddleware.single('myfile'), createItems)


module.exports = router