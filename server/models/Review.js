const mongoose = require('mongoose');

const { Schema } = mongoose;

const tvShowSchema = new Schema({
  name: { //name of show
    type: String,
    required: true,
  },
  genre: { //genre of show
    type: String,
    required: true,
  },
  stream: { //stremaing service 
    type: String,
    required: true,
  },
  reviews: [{ //array of reviews linked to the unique user id's of Users
    reviewdescription: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  }],
});

const TVShow = mongoose.model('TVShow', tvShowSchema);

module.exports = TVShow;
