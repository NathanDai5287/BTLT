import { useState } from 'react';

type TodoItemProps = {
	id: number;
	text: string;
	onEdit: (newText: string) => void;
	onDelete: () => void;
};

const TodoItem = ({ id, text, onEdit, onDelete }: TodoItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(text);

	const startEdit = () => {
		setIsEditing(true);
		setEditText(text);
	};

	const saveEdit = () => {
		onEdit(editText);
		setIsEditing(false);
	};

	const cancelEdit = () => {
		setEditText(text);
		setIsEditing(false);
	};

	return (
		<div className="todo-item">
			{isEditing ? (
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
				<div className="display-mode">
					<span className="todo-text">#{id}: {text}</span>
					<div className="todo-actions">
						<button onClick={startEdit}>Edit</button>
						<button onClick={onDelete}>Delete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TodoItem;