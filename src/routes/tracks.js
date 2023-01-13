const express = require('express')
const { getItems, getItem, createItems } = require('../controller/tracksController')
const router = express.Router()

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", createItems)


module.exports = router