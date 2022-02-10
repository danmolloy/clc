import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Artist {
    image: String
    artist: String!
    members: String
    albums: [ [String | Int] ]
    folder: String!
  }

  type Query {
    artists: [Artist]
  }
`