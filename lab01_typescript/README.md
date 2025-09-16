# Todo CLI

Command-line todo list application.

Get started with the activity:
- `git clone https://github.com/NathanDai5287/BTLT.git`
- `cd BTLT`
- `npm install`
- Run your code using `npx tsx index.ts`

Below are the commands you should implement in the `index.ts` file.

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
