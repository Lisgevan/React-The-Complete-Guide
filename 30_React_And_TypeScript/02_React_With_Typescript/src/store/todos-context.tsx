import React, { useState } from "react";
import Todo from "../models/todo";
type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = props => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const onAddTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodos(prevTodos => [...prevTodos, newTodo]);
		// setTodos(prevTodos => prevTodos.concat(newTodo));
	};

	const removeTodoHandler = (id: string) => {
		setTodos(prevTodos => prevTodos.filter(todos => todos.id !== id));
	};

	const contextalue: TodosContextObj = {
		items: todos,
		addTodo: onAddTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return <TodosContext.Provider value={contextalue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
