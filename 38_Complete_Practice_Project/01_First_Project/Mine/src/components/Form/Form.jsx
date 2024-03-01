import { useRef } from "react";

import classes from "./Form.module.css";

const Form = ({ submitHandler, inputChangeHandler, resetHandler, userInput }) => {
	const formRef = useRef(null);

	const resetFormHandler = event => {
		event.preventDefault();
		if (formRef.current) {
			// Check if the ref has been assigned a value
			resetHandler(formRef.current);
		}
		console.dir("resetting form");
	};

	return (
		<form className={classes.form} onSubmit={submitHandler} ref={formRef}>
			<div className={classes["input-group"]}>
				<p>
					<label htmlFor="current-savings">Current Savings (€)</label>
					<input
						onChange={event => inputChangeHandler("current-savings", event.target.value)}
						type="number"
						value={userInput["current-savings"]}
						name="currentSavings"
						id="current-savings"
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings (€)</label>
					<input
						onChange={event => inputChangeHandler("yearly-contribution", event.target.value)}
						type="number"
						value={userInput["yearly-contribution"]}
						name="yearlyContribution"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className={classes["input-group"]}>
				<p>
					<label htmlFor="expected-return">Expected Interest (%, per year)</label>
					<input
						onChange={event => inputChangeHandler("expected-return", event.target.value)}
						type="number"
						value={userInput["expected-return"]}
						name="expectedReturn"
						id="expected-return"
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						onChange={event => inputChangeHandler("duration", event.target.value)}
						type="number"
						value={userInput.duration}
						name="duration"
						id="duration"
					/>
				</p>
			</div>
			<p className={classes.actions}>
				<button type="reset" className={classes.buttonAlt} onClick={resetFormHandler}>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default Form;
