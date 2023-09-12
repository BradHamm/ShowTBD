// used to export both the typeDefs and resolvers outside of the schemas folder

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
