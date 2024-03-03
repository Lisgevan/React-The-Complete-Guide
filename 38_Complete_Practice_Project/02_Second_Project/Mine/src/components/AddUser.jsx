import { useRef } from "react";

import Button from "./Button";
import classes from "./AddUser.module.css";

const AddUser = ({ addUser }) => {
	const formRef = useRef();

	const handleAddUser = event => {
		event.preventDefault();
		const formData = new FormData(formRef.current);
		const userData = {
			username: formData.get("username"),
			age: formData.get("age"),
		};
		formData.set("username", userData.username);

		const form = formRef.current;
		addUser(userData, form);
	};

	return (
		<form className={classes.input} ref={formRef} onSubmit={event => handleAddUser(event)}>
			<p>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" id="username" />
			</p>
			<p>
				<label htmlFor="age">Age (Years)</label>
				<input type="number" name="age" id="age" />
			</p>
			<Button>Add User</Button>
		</form>
	);
};

export default AddUser;
