const mongoose = require('mongoose')
if (process.env.NODE_ENV != 'production') {
  const config = require('../config')
  var connectionURL = config.connectionURL
} else {
  var connectionURL = process.env.DB_CONNECTION_STRING
}

// var connectionURL = 'mongodb+srv://admin:taquitos@cluster0-xg9bk.mongodb.net/clase?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
