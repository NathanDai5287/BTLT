import { gql } from "graphql-tag";

/**
 * TODO: Define the Schema of the GraphQL backend. You should at a minimum
 * have defined a `Book` type, the `Query` type, and the `Mutation` type.
 *
 * A incomplete schema has been given to you. You should expose all fields
 * of the Book type and make sure your server supports all the features
 * listed in the README.md!
 */
const typeDefs = gql`
  type Book {
    id: Int!
  }

  type Query {
    books: [Book!]!
  }

  # type Mutation {}
`;

export default typeDefs;
