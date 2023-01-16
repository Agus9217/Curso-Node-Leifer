const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {

  try {
    const data = await tracksModel.find()
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }




}
const getItem = (req, res) => {}


const createItems = async (req, res) => {
  try {
    const { body } = req
    const data = await tracksModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS')
  }



}
const updateItems = (req, res) => {}
const deleteItems = (req, res) => {}

module.exports = { getItems, getItem, createItems, updateItems, deleteItems }