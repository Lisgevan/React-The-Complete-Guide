import React, { useContext } from "react";

// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map(item => (
				<TodoItem text={item.text} key={item.id} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
			))}
		</ul>
	);
};

export default Todos;
