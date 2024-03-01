import { useState } from "react";

import calculateHandler from "./utils/calculateHandler";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";

function App() {
	const [userInput, setUserInput] = useState({
		"current-savings": "",
		"yearly-contribution": "",
		"expected-return": "",
		duration: "",
	});
	const [resultData, setResultData] = useState();

	const submitHandler = event => {
		event.preventDefault();
		if (
			userInput["current-savings"] &&
			userInput["yearly-contribution"] &&
			userInput["expected-return"] &&
			userInput["duration"]
		) {
			setResultData(calculateHandler(userInput));
		}
	};

	const inputChangeHandler = (input, value) => {
		setUserInput(prevUserInput => {
			return { ...prevUserInput, [input]: value };
		});
	};

	const resetHandler = form => {
		setUserInput({
			"current-savings": "",
			"yearly-contribution": "",
			"expected-return": "",
			duration: "",
		});
		setResultData(undefined);
		form.reset();
	};

	return (
		<div>
			<Header />
			<Form
				userInput={userInput}
				submitHandler={submitHandler}
				inputChangeHandler={inputChangeHandler}
				resetHandler={resetHandler}
			/>
			{/* Todo: Show below table conditionally (only once result data is available) */}
			{/* Show fallback text if no data is available */}
			{resultData && <Results resultData={resultData} />}
			{!resultData && (
				<p style={{ textAlign: "center" }}>Enter some data and click "Calculate" to see your investment analysis.</p>
			)}
		</div>
	);
}

export default App;

