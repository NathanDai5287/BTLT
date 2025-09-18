import { useState } from 'react';
import TodoItem from './components/TodoItem';

type TodoItem = {
	id: number;
	text: string;
};

const App = () => {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	const [newTodoText, setNewTodoText] = useState('');

	const addTodo = () => {
		// TODO: implement add functionality
	};

	const deleteTodo = (id: number) => {
		// TODO: implement delete functionality
	};

	const editTodo = (id: number, newText: string) => {
		// TODO: implement edit functionality
	};

	return (
		<div className="todo-app">
			<h1>Todo List</h1>

			{/* Add Todo Section */}
			<div className="add-todo">
				<input
					type="text"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
					placeholder="Enter new todo..."
				/>
				<button onClick={addTodo}>Add</button>
			</div>

			{/* Todo List */}
			<div className="todo-list">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						onEdit={editTodo}
						onDelete={deleteTodo}
					/>
				))}
			</div>

			{todos.length === 0 && (
				<p className="no-todos">No todos yet. Add one above!</p>
			)}
		</div>
	);
};

export default App;
