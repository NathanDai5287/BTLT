import { useState } from 'react';

type TodoItem = {
	id: number;
	text: string;
};

const App = () => {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	const [newTodoText, setNewTodoText] = useState('');
	const [editingId, setEditingId] = useState<number | null>(null);
	const [editText, setEditText] = useState('');

	const addTodo = () => {
		// TODO: implement add functionality
	};

	const deleteTodo = (id: number) => {
		// TODO: implement delete functionality
	};

	const startEdit = (id: number, currentText: string) => {
		// TODO: implement edit mode
	};

	const saveEdit = () => {
		// TODO: implement save edit functionality
	};

	const cancelEdit = () => {
		// TODO: implement cancel edit functionality
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
					<div key={todo.id} className="todo-item">
						{editingId === todo.id ? (
							// Edit mode
							<div className="edit-mode">
								<input
									type="text"
									value={editText}
									onChange={(e) => setEditText(e.target.value)}
								/>
								<button onClick={saveEdit}>Save</button>
								<button onClick={cancelEdit}>Cancel</button>
							</div>
						) : (
							// Display mode
							<div className="display-mode">
								<span className="todo-text">#{todo.id}: {todo.text}</span>
								<div className="todo-actions">
									<button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
									<button onClick={() => deleteTodo(todo.id)}>Delete</button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			{todos.length === 0 && (
				<p className="no-todos">No todos yet. Add one above!</p>
			)}
		</div>
	);
};

export default App;
