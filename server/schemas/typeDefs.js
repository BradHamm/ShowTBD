const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    favshows: [String!]!
    favcelebs: [String!]!
    favgenre: String
    showrevs: [ShowReview!]!
  }

  type ShowReview {
    reviewdesc: String!
    user: User!
  }

  type TVShow {
    _id: ID!
    name: String!
    genre: String!
    stream: String!
    reviews: [ShowReview!]!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    # Get user's ID
    getUser(userId: ID!): User

    # Get TV show
    getTVShow(showId: ID!): TVShow
  }

  type Mutation {
    # Create a new TV show instance
    createTVShow(name: String!, genre: String!, stream: String!): TVShow

    # Add review
    addShowReview(showId: ID!, reviewdesc: String!): ShowReview

    # Authentication mutations
    login(username: String!, password: String!): AuthPayload
    createUser(username: String!, password: String!, email: String!): User
  }
`;

module.exports = typeDefs;
