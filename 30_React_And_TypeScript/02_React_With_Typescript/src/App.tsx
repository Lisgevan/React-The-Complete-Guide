// import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
// import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
	// const todos = [ new Todo( "Learn React" ), new Todo( "Learn Typescript" ) ];
	// const [todos, setTodos] = useState<Todo[]>([]);

	// const onAddTodoHandler = (todoText: string) => {
	// 	const newTodo = new Todo(todoText);
	// 	setTodos(prevTodos => [...prevTodos, newTodo]);
	// 	// setTodos(prevTodos => prevTodos.concat(newTodo));
	// };

	// const removeTodoHandler = (id: string) => {
	// 	setTodos(prevTodos => prevTodos.filter(todos => todos.id !== id));
	// };

	return (
		<TodosContextProvider>
			<NewTodo
			// onAddTodo={ onAddTodoHandler }
			/>
			<Todos
			// items={ todos } onRemoveTodo={ removeTodoHandler }
			/>
		</TodosContextProvider>
	);
}

export default App;

