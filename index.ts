const input = require('prompt-sync')();

interface TodoItem {
	id: number;
	// TODO
}

const todo: TodoItem[] = [];

const create = (text: string) => {
	// TODO
}

const show = (id: number) => {
	// TODO
}

const list = () => {
	// TODO
}

const update = (id: number, text: string) => {
	// TODO
}

const del = (id: number) => {
	// TODO
}

while (true) {
	const command = input('> ');

	// TODO: parse command and call appropriate function

	if (command === 'exit') {
		break;
	}
}
