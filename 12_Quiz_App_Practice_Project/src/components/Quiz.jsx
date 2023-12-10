import { useState, useCallback } from "react";

import QUESTIONS from "../questions";

import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers(prevUserAnswers => {
			return [...prevUserAnswers, selectedAnswer];
		});
	}, []);

	const handleSkipanswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipanswer}
			/>
		</div>
	);
}

export default Quiz;
