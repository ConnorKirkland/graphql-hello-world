import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `#graphql
  type Query {
    greeting: String
  }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL World!",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);