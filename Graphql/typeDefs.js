import { gql } from 'apollo-server';


export const typeDefs = gql`
type products{
    url: String
    blurhash:String
}
type posted{
    id:String
    url:String
    blurhash:String
}

type Query{
    posts:[products]
}
type Mutation{
    createPost(url:String):posted
}

`