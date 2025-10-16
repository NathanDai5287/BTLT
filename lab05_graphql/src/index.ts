import { ApolloServer } from "@apollo/server";
import express from "express";

import { typeDefs, resolvers } from "./modules";
import { expressMiddleware } from "@as-integrations/express5";

async function startServer() {
  const app = express();
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server)
  );

  app.listen(5001, () => {
    console.log("Apollo Server on http://localhost:5001/graphql");
  });
}

startServer();
