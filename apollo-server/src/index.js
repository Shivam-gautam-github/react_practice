import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './config/db.js';
import { typeDefs } from './models/typeDefs.js';
import { resolvers } from './resolvers.js';

// connect to db
db();

// Apollo server needs two arguments typeDefs & resolvers
// typeDefs is the graphql schema that is exposed by the Apollo server (Check Models Folder)
// Resolvers are the implementation of that schema
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.info(`Server 🚀 running at: ${url}`);
