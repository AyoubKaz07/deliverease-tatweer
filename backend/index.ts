import cors from 'cors';
import { resolvers } from './graphql/resolvers/index';
import { applyMiddleware } from 'graphql-middleware';

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { ApolloServer } from "@apollo/server";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { mergedGQLSchema } from "./graphql/typeDefs/index";
import { expressMiddleware } from "@apollo/server/express4";
import helmet from 'helmet';
const PORT = 5005;

import createValidation from 'graphql-no-batched-queries'
const validation = createValidation({ allow: 1 })

const app = express();
app.use(express.json());
// app.use(limiter);
app.use(helmet());


const httpServer = createServer(app);

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mergedGQLSchema,
    resolvers: resolvers,
  }),
  // permissions
);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  validationRules: [validation],
  introspection: true,

  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

(async () => {
  await server.start();
  app.use("/graphql", cors(), express.json(), expressMiddleware(server, {
    context: async (req) => ({
      req: req.req
    })
  }));
})();


httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});