const { storageModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")


const PUBLIC_URL = process.env.IMG_URL

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find()
    res.send({ data })
  } catch (error) {
  handleHttpError(res, 'ERROR_GETTING_ITEMS')
  }
}

const getItem = async (req, res) => {
  try {
    const { id } = req.params
    const data = await storageModel.findById(id)
    res.send({ data })
  } catch (error) {
  handleHttpError(res, 'ERROR_GETTING_ITEM')
  }
}


const createItems = async (req, res) => {
  const { file } = req
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData)
  res.send({ data })


}
const updateItems = (req, res) => {}
const deleteItems = (req, res) => {}

module.exports = { getItems, getItem, createItems, updateItems, deleteItems }