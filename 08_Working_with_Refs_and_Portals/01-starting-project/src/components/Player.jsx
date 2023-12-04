import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();

	const [enteredPlayerName, setEnteredPlayerName] = useState(null);

	// const [submitted, setSubmitted] = useState(false);

	// const handleChange = event => {
	// 	setSubmitted(false);
	// 	setEnteredPlayerName(event.target.value);
	// };
	// const handleClick = () => setSubmitted( true );

	// all the comments can be changed to the following using refs
	const handleClick = () => {
		if (playerName.current.value === "") setEnteredPlayerName(null);
		else setEnteredPlayerName(playerName.current.value);
		playerName.current.value = "";
	};

	return (
		<section id="player">
			{/* <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2> */}
			<h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
			{/* (enteredPlayerName ?? "unknown entity")
          is the same as 
          (enteredPlayerName ? enteredPlayerName "unknown entity") */}
			<p>
				<input
					ref={playerName}
					type="text"
					//a;so the following are not needed any more
					// onChange={ handleChange }
					// value={ enteredPlayerName }
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}

