# Todo CLI

Command-line todo list application.

Run using `tsx index.ts`

## Usage

Execute the application and enter commands at the prompt.

## Commands

### `add <text>`
Create a new todo item.
```
> add Buy milk
Created todo #1: "Buy milk"
```

### `list`
Display all todo items.
```
> list
1: Buy milk
2: Walk dog
```

### `show <id>`
Display a specific todo item by ID.
```
> show 1
Todo #1: "Buy milk"
```

### `edit <id> <text>`
Update the text of an existing todo item.
```
> edit 1 Buy chocolate milk
Updated todo #1: "Buy chocolate milk"
```

### `delete <id>`
Remove a todo item by ID.
```
> delete 1
Deleted todo #1: "Buy chocolate milk"
```

### `exit`
Terminate the application.
