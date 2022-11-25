import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PingResolver } from './resolvers/ping';
import { buildSchema } from 'type-graphql';
import { ProductResolver } from './resolvers/ProductResolver';
import { CategoryResolver } from './resolvers/CategoryResolver';
export async function startServer() {
    const app = express();
    const server =new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver,ProductResolver,CategoryResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });
    await server.start();
    server.applyMiddleware({ app,path: '/graphql' });
    return app;
}





