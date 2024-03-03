import React, { useState } from "react";

import AddUser from "./components/AddUser";
import ErrorModal from "./components/ErrorModal";
import UsersList from "./components/UsersList";

function App() {
	const [userList, setUserList] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const addUserHandler = (userData, formRef) => {
		if (!userData.username || !userData.age) {
			setErrorMessage("Please enter a username and a positive number for the age.");
		} else if (userData.username && (userData.age <= 0 || !userData.age)) {
			setErrorMessage("Please enter number for the age greater than zero.");
			formRef.elements[1].value = "";
		} else {
			setUserList(prevList => [...prevList, { username: userData.username, age: userData.age }]);
			formRef.elements[0].value = "";
			formRef.elements[1].value = "";
			setErrorMessage("");
		}
	};

	const closeModalHandler = () => {
		setErrorMessage(""); // Remove
	};

	return (
		<div>
			<AddUser addUser={addUserHandler} />
			{errorMessage && <ErrorModal closeModal={closeModalHandler} message={errorMessage} />}

			{userList.length !== 0 && <UsersList userList={userList} />}
		</div>
	);
}

export default App;

