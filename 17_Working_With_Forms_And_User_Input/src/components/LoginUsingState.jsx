import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput("", value => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordlChange,
		handleInputBlur: handlePasswordlBlur,
		hasError: passwordHasError,
	} = useInput("", value => hasMinLength(value, 6));

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onBlur={handleEmailBlur}
					value={emailValue}
					onChange={handleEmailChange}
					error={emailHasError && "Please enter a valid email!"}
					required
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					value={passwordValue}
					onChange={handlePasswordlChange}
					onBlur={handlePasswordlBlur}
					error={passwordHasError && "Please enter a valid password!"}
					required
				/>
			</div>

			<p className="form-actions">
				<button type="reset" className="button button-flat">
					Reset
				</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}

