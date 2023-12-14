import classes from "./User.module.css";

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
// export default User;

import { Component } from "react";

class User extends Component {
	// constructor(props) { // not needed for now
	// 	super(props); // not needed for now
	// } // not needed for now
	// state = {};

	componentWillUnmount() {
		console.log("User will unmount");
	}

	render() {
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

export default User;

