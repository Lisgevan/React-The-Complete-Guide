// const names = ["Max", "John"];
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ author, body, id }, { enteredBody }) {
	// const chosenName = Math.random() > 0.5 ? names[0] : names[1];

	return (
		<li className={classes.post}>
			{/* <p>{chosenName}</p> */}
			<Link to={id}>
				<p className={classes.author}>{author}</p>
				<p className={classes.text}>{body}</p>
			</Link>
		</li>
	);
}

export default Post;
