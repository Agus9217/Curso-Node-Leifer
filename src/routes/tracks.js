const express = require('express')
const { getItems, getItem, createItems, updateItems, deleteItems } = require('../controller/tracksController')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracksValidator')
const router = express.Router()

router
  .get("/", getItems)
  .get("/:id", validatorGetItem, getItem)
  .post("/", validatorCreateItem, createItems)
  .put('/:id', validatorGetItem, validatorCreateItem, updateItems)
  .delete('/:id', validatorGetItem, deleteItems)


module.exports = router