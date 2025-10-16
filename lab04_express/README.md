# Todo List Backend API Server

The code in this lab will be different from the code written in labs 2 and 3. However, lots of code will overlap with lab 1.

The server should support:
- Getting a single TODO
- Getting all TODOs
- Adding a TODO
- Editing a TODO by ID
    ```http
    PUT /todo/:id HTTP/1.1
    ```

- Deleting a TODO by ID
    ```http
    DELETE /todo/:id HTTP/1.1
    ```

More instructions for each functionality is provided in comments in the code.

## Setup

In the `btlt` folder:

1. `git pull`
2. `cd lab04_express`
3. `npm install`
4. To run the server: `npm run dev`

The route prefix  to put into Insomnia is: `http://localhost:5001`

## Files to Modify

- `src/index.ts`

## Tips

#### 1. Remember to respond with an accurate [response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)!

#### 2. Test your code with [Insomnia](https://insomnia.rest/).

#### 3. To access query parameters, use `req.query`. To access path parameters, use `req.params`.
