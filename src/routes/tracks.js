const express = require('express')
const { getItems, getItem, createItems } = require('../controller/tracksController')
const { validatorCreateItem } = require('../validators/tracksValidator')
const router = express.Router()

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", validatorCreateItem, createItems)


module.exports = router