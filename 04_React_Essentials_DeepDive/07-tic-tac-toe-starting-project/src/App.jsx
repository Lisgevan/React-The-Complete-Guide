import React, { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}
	return currentPlayer;
}

function deriveWinner(gameBoard, players) {
	let winner;
	for (let combination of WINNING_COMBINATIONS) {
		// console.log(combination);
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = players[firstSquareSymbol];
		}
	}
	return winner;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];

	for (let turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}
	return gameBoard;
}

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

	const hasDraw = gameTurns.length === 9 && !winner;

	function handleSecteSquare(rowIndex, colIndex) {
		setGameTurns(prevTurns => {
			let currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

			return updatedTurns;
		});
	}

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePLayerNameChange(symbol, newName) {
		setPlayers(prevplayers => {
			return {
				...prevplayers,
				[symbol]: newName,
			};
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePLayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlePLayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
				<GameBoard onSelectSquare={handleSecteSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;

