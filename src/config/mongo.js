const mongoose = require('mongoose')

const URI = process.env.URI

mongoose.set('strictQuery', true)

const dbConnect = () => {
  mongoose.connect(URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
   },(err) => {
    if(!err) {
      console.log('#### DATABASE IS CONNECT ####')
    } else {
      console.log('#### DATABASE ERROR ####')
    }
   })
}

module.exports = dbConnect