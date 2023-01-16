require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./src/config/mongo')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static("./src/storage"))

app.use("/api", require('./src/routes'))

app.listen(PORT, () => {
  console.log(`Listen on: http://localhost:${PORT}`)
})


dbConnect()