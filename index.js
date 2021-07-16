import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { MONGODB } from './config.js';
import { typeDefs } from './Graphql/typeDefs.js'
import { resolvers } from './Graphql/Resolvers/index.js'



const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,

    playground: true
});
const PORT = process.env.PORT || 5000
mongoose.connect(MONGODB, { useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }).
    then(() => {
        return server.listen({ port: PORT })
    }).
    then((res) => console.log(`server running on port${res.url}`));
