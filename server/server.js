const express = require('express'); //express 
const { ApolloServer } = require('@apollo/server'); //apollo
const { expressMiddleware } = require('@apollo/server/express4'); //express and apollo middleware
const path = require('path'); //path for routing between pages
const { authMiddleware } = require('./utils/auth'); //authentification for sessions

const { typeDefs, resolvers } = require('./schemas'); //importing typeDefs and resovlers for GraphQl queries
const db = require('./config/connection'); //mongooseDB for data

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // static assets (if we're going to use them)
  // app.use('/images', express.static(path.join(__dirname, '../client/public/images')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware //providing context for the graphQL queries made
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`GraphQl Port: http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
