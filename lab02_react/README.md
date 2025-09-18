# Todo App

Get started with the activity:
- `git clone https://github.com/NathanDai5287/BTLT.git`
- `cd BTLT/lab02_react`
- `npm install`
- Run your application using `npm run dev`

Below are the features you should implement in the React components.

## Final Product

Your completed todo app should:
- Display a single todo item at a time (not a list)
- Allow adding a new todo only when no todo exists
- Disable adding when a todo already exists (must delete first)
- Allow editing the current todo inline
- Allow deleting the current todo
- Maintain an incrementing ID counter that never decreases
- Show appropriate messages for different states
- Have a clean, functional user interface

## How It Should Function

### Adding a Todo
- Only possible when no todo currently exists
- Enter text in the input field and click "Add"
- The todo appears with an auto-generated incremental ID
- Input field and button are disabled when a todo exists
- Input field clears after adding

### Editing a Todo
- Click "Edit" button on the displayed todo
- Todo switches to edit mode with input field
- Click "Save" to confirm changes or "Cancel" to discard
- Todo returns to display mode

### Deleting a Todo
- Click "Delete" button to remove the current todo
- App returns to empty state with "No todo yet" message
- Input field and add button become enabled again
- ID counter is preserved (next todo will have incremented ID)

### Visual States
- **Empty state**: Shows enabled input field, enabled "Add" button, and "No todo yet" message
- **Todo exists**: Shows disabled input field, disabled "Add" button, helper text, and the todo item
- **Edit mode**: Shows input field with Save/Cancel buttons within the todo item

## Important Files

### Files to Modify
- `src/App.tsx` - Main application component with state management
- `src/components/TodoItem.tsx` - Reusable todo item component

### Other Relevant Files
- `src/main.tsx` - React application entry point
- `src/index.css` - Application styles

## What You Need to Implement

Complete the TODO comments in `src/App.tsx`:

### `addTodo()` function
- Create a new todo with the current `nextId` and input text
- Increment the `nextId` counter for future todos
- Clear the input field
- Update the todo state

### `deleteTodo()` function
- Remove the current todo
- Reset todo state to null
- Keep the `nextId` counter unchanged (don't decrement)

### `editTodo(newText: string)` function
- Update the existing todo's text with the new text
- Maintain the same ID

Complete the TODO comment in `src/components/TodoItem.tsx`:

### `saveEdit()` function
- Call the `onEdit` prop with the new text from the edit input
- Exit edit mode by setting `isEditing` to false

## Testing Your Implementation

Verify your app works by:
1. Adding a todo - should appear with ID #1, input becomes disabled
2. Try adding another todo - input and button should be disabled
3. Editing the todo - text should update, ID stays the same
4. Deleting the todo - should return to empty state, input becomes enabled
5. Adding another todo - should appear with ID #2 (counter incremented)
6. Delete and add again - should appear with ID #3
7. Browser refresh - should reset to empty state (no persistence required)
