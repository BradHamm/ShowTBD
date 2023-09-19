const bcrypt = require('bcrypt');
const User = require('../models/User');
const { signToken } = require('../utils/auth'); 

const resolvers = {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error('Username not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid password - Please try again');
      }

      const token = signToken({ userId: user._id, username: user.username });
      
      return {
        token,
        user,
      };
    },
    createUser: async (_, { username, password, email }) => {

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });

      await newUser.save();
      
      const token = signToken({ userId: newUser._id, username: newUser.username });
      
      return {
        token,
        user: newUser,
      };
    },
  },
};

module.exports = resolvers;
