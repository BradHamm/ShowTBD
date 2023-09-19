const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { //username of User
    type: String,
    required: true,
    trim: true,
  },
  password: { //password of User
    type: String,
    required: true,
    minlength: 5,
    trim: true,
  },
  email: { //email of User (not used outside of creation)
    type: String,
    required: true,
    trim: true,
  },
  favshows: [{ //array of favorite shows to be displayed on the User's profile
    type: String,
    required: true,
  }],
  favceleb: [{ //array of favorite celebrities/actors/actresses to be displayed on the User's profile
    type: String,
    required: true,
  }],
  favgenre: { //favorite genre to be displayed on User's profile
    type: String,
    trim: true,
  },
  showrevs: [{ //array of reviews left by Users on different Show instances
    reviewdesc: {
      type: String,
      required: true,
      trim: true,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    show: { type: Schema.Types.ObjectId, ref: 'TVShow' },
  }],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
