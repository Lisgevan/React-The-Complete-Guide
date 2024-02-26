// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
	// const [posts, setPosts] = useState([]);
	// const [ isFetching, setIsFetching ] = useState( true );
	const posts = useLoaderData();

	// useEffect(() => {
	// 	async function fetchPosts() {
	// 		const response = await fetch("http://localhost:8080/posts");
	// 		const resData = await response.json();
	// 		setPosts(resData.posts);
	// 		setIsFetching(false);
	// 	}

	// 	fetchPosts();
	// }, []);

	// function addPostHandler(postData) {
	// 	fetch("http://localhost:8080/posts", {
	// 		method: "POST",
	// 		body: JSON.stringify(postData),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});
	// 	setPosts(existingPosts => [postData, ...existingPosts]);
	// }

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map(post => (
						<Post key={post.id} id={post.id} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet</h2>
					<p>Start adding some!</p>
				</div>
			)}
			{/* {isFetching && (
				<div style={{ textAlign: "center", color: "white" }}>
					<p>Loading posts...</p>
				</div>
			)} */}
		</>
	);
}

export default PostsList;
