import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    sayHello: String
    users: [User!]!
  }
  type User {
    name: String
  }
`
const resolvers = {
  Query: {
    sayHello(/* parent, args, context */) {
      return 'Hello World!'
    },
    // NOTE: This is temporary - I have no intention of building my own user-management system
    users(/* parent, args, context */) {
      return [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carlos' }]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
