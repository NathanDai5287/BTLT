import { getBooks } from "./controller";

/**
 * TODO: Define the resolvers. There should be a function for each
 * query and mutation defined in the schema. These should call functions
 * defined in the controller.
 */
const resolver = {
  Query: {
    /**
     * The second parameter, `args`, contains the arguments defined in the
     * schema for this specific query. For the `books`, the `args` object
     * will be empty.
     *
     *
     * Let's look at a more concrete example. Suppose we have defined a
     * schema as such:
     *
     *        type Query {
     *           todo(id: Int!): Todo
     *         }
     *
     * Then, if we pass in a value of 1 to the `todo` query, the `args`
     * object for the `todo` query will be:
     *
     *        { id: 1 }
     *
     */
    books: (_: any, args: any) => {
      return getBooks();
    },
  },

  /**
   * TODO: Remember to define the mutation resolvers too!
   */
  // Mutation: {},
};

export default resolver;
