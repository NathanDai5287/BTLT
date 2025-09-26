# Todo List App

Work from your Lab 2 code. Implement the same todo list functionality from Lab 1, but using React instead of a CLI.

Your app should support:
- Adding multiple todos
- Listing all todos
- Editing any todo by ID
- Deleting any todo by ID

Reference Lab 1's logic and adapt it to work with React components and state management.

Lab 3 == Lab 1 but with React == Lab 2 but with multiple todos

## Optional Tasks

### 1). useEffect for Local Storage Synchronization
(search up localStorage to learn more)
- Use `useEffect` to persist todo data to `localStorage`
- Load saved todo data when the app starts
- Automatically save changes when todo state updates
- This ensures todos persist across browser refreshes

### 2). useContext for State Management
- Extract todo state management into a Context provider
- Use `useContext` to share todo state and actions across components
- Move state logic out of the main App component into a custom context
- This demonstrates proper state management patterns for larger applications

**Files to create:**
- `src/contexts/TodoContext.tsx` - Define the context, provider, and custom hook

**Files to modify:**
- `src/App.tsx` - Wrap components with the TodoProvider and remove local state
- `src/components/TodoItem.tsx` - Use the context instead of props for todo actions
- `src/main.tsx` - Wrap the App with TodoProvider (alternative approach)

**Using the internet is encouraged** for learning about these hooks and implementation patterns. Look up documentation, tutorials, and examples to help you implement these features.
