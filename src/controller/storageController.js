const { storageModel } = require("../models")


const PUBLIC_URL = process.env.IMG_URL

const getItems = async (req, res) => {
  const data = await storageModel.find()
  res.send({ data })
}
const getItem = (req, res) => {}


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