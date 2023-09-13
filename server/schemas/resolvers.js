// resolvers will be used to path to and populate information that is retrieved from the call to the API, as well as handling the mutations of that data is relation to the database.

const bcrypt = require('bcrypt');
const User = require('./models/User'); // Import your User model

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

      // You can generate a JWT token here and return it if login is successful

      return user;
    },






  },
};