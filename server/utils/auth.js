const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'secretENV'; //will need to include this in the .env file to keep it hidden
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user information.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) { //falsey for token
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration }); //verifies a signed token
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};