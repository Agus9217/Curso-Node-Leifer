require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./src/config/mongo')
const app = express()

const PORT = process.env.PORT || 3000

dbConnect()
app.use(cors())


app.listen(PORT, () => {
  console.log(`Listen on: http://localhost:${PORT}`)
})