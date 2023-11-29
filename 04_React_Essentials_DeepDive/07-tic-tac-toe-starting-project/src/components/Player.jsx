import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setplayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(isEditing => !isEditing);
		if (isEditing) onChangeName(symbol, playerName);
	};
	const handleChange = event => setplayerName(event.target.value);

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing)
		editablePlayerName = (
			<input type="text" className="player-name" name="" value={playerName} id="" required onChange={handleChange} />
		);

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				{/* ot using ternary operator */}
				{/* {isEditing ? (
					<input type="text" className="player-name" name="" value={ playerName } id="" required />
				) : (
					<span className="player-name">{ playerName }</span>
				)} */}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
