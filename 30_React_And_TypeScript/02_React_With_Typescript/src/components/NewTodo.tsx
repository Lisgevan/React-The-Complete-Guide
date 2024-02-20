import { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const todosCtx = useContext(TodosContext);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			///throw new Error
			return;
		}

		todosCtx.addTodo(enteredText);
		todoTextInputRef.current!.value = "";
	};

	return (
		<form action="" onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo Test</label>
			<input type="text" name="inputTodo" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
