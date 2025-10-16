# Book List Tracker GraphQL App

Let's change things up! On our plentiful todo apps, we've crossed out all the books we have read, but we don't have an easy way to track all the books anymore! Let's create a book list app so we can keep track of all the books on our reading list and all the books we've already read.

Our app should support:
- Getting all books in the list
- Getting a singular book in the list
- Adding a new book to the list
- Indicate a book in the list has been fully read

## Setup

In the `btlt` folder:

1. `git pull`
2. `cd lab05_graphql`
3. `npm install`
4. To run the server: `npm run dev`

The Apollo GraphQL Playground will be at `http://localhost:5001/graphql`.

## Files

Here are the list of files that you should modify:

- `src/modules/todo/typedef.ts`: GraphQL schema goes here.
- `src/modules/todo/resolver.ts`: GraphQL resolvers go here. Should match 1-to-1 with the queries and mutations defined in `typedef.ts`.
- `src/modules/todo/controller.ts`: Application logic goes here.

In `controller.ts`, you'll see a lot of skeleton code, including a type definition for the type `Book`. This should be a clue to what your GraphQL schema will look like!


## Tips

#### 1. Start off by defining the GraphQL schema in `typedef.ts`. This should dictate how your resolvers in `resolver.ts` will look like.

#### 2. The functions in `controller.ts` should be similar to the logic from the todo app!
