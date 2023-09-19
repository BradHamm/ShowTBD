// connection to the Atlas DB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bradhamopt:testpassword@showtbdcluster.brzqigu.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;