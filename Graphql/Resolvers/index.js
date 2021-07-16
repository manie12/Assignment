import { postQuery } from './post.js';

export const resolvers = {
    Query: {
        ...postQuery.Query
    }
}