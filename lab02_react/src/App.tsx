import { useState } from "react";
import TodoItem from "./components/TodoItem";

type Todo = {
  id: number;
  text: string;
};

const App = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [newTodoText, setNewTodoText] = useState<string>("");
  const [nextId, setNextId] = useState<number>(1);

  const addTodo = () => {
    // TODO: implement add functionality
  };

  const deleteTodo = () => {
    // TODO: implement delete functionality
  };

  const editTodo = (newText: string) => {
    // TODO: implement edit functionality
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      {/* Add Todo Section */}
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter todo..."
          disabled={todo !== null}
        />
        <button
          onClick={addTodo}
          disabled={todo !== null || newTodoText.trim() === ""}
        >
          Add
        </button>
      </div>

      {/* Single Todo Display */}
      {todo && (
        <div className="todo-display">
          <TodoItem
            id={todo.id}
            text={todo.text}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
        </div>
      )}

      {!todo && <p className="no-todo">No todo yet. Add one above!</p>}

      {todo && (
        <p className="helper-text">Delete the current todo to add a new one.</p>
      )}
    </div>
  );
};

export default App;
