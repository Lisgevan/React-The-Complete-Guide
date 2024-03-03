import classes from "./UsersList.module.css";

const UsersList = ({ userList }) => {
	return (
		<div className={classes.users}>
			<ul>
				{userList.map((user, index) => {
					return <li key={index}>{`${user.username} (${user.age} years old)`}</li>;
				})}
			</ul>
		</div>
	);
};

export default UsersList;
