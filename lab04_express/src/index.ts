import express from "express";

const app = express();
app.use(express.json());

type TodoItem = {
  id: number;
  // TODO: feel free to replace with the type you've defined in previous labs
}

let todos: TodoItem[] = [];

/**
 * TODO: Implement getting all TODO items. Also, optionally accept a query
 * parameter to get a single TODO item by ID.
 *
 */
app.get("/todo", (req, res) => { });

/**
 * TODO: Implement creating a new TODO item. Define the body of the request
 * to include all information necessary to create a TODO item.
 *
 * Note that this body should not include an ID field (it should be generated
 * automatically by the server).
 */
app.post("/todo", (req, res) => { });

/**
 * TODO: Implement modifying an existing TODO item. Define the body of the
 * request to include only the information that will be modified.
 */
// WRITE CODE HERE

/**
 * TODO: Implement deleting a TODO item by id.
 */
// WRITE CODE HERE

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
