export default function ({ children, buttons, ButtonsContainer = "menu" }) {
	// const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
