import { useState } from 'react';
import TodoItem from './components/TodoItem';

type Todo = {
	id: number;
	text: string;
};

const App = () => {
	const [todo, setTodo] = useState<Todo | null>(null);
	const [newTodoText, setNewTodoText] = useState('');

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

			{/* Add/Update Todo Section */}
			<div className="add-todo">
				<input
					type="text"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
					placeholder="Enter todo..."
				/>
				<button onClick={addTodo}>{todo ? 'Update' : 'Add'}</button>
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

			{!todo && (
				<p className="no-todo">No todo yet. Add one above!</p>
			)}
		</div>
	);
};

export default App;
