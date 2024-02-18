import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting component", () => {
	test("renders Hello World as a text", () => {
		// Arrange (STEP 01)
		render(<Greeting />);

		//Act (STEP 02)
		// nothign to do here

		//Assert (STEP 03)
		const helloWorldElement = screen.getByText("Hello World!"); // can also use regex expressions
		expect(helloWorldElement).toBeInTheDocument();
	});

	test("renders 'good to see you' as a text if the button was NOT clicked", () => {
		// Arrange (STEP 01)
		render(<Greeting />);

		//Act (STEP 02)
		// nothign to do here

		//Assert (STEP 03)
		const goodToSeeYouElement = screen.getByText("good to see you", { exact: false }); // can also use regex expressions
		expect(goodToSeeYouElement).toBeInTheDocument();
	});

	test("renders Changed if the button was clicked", async () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

		// Assert
		const outputElement = await screen.findByText("Changed!");
		expect(outputElement).toBeInTheDocument();
	});

	// test("does not render 'good to see you' if the button was clicked", async () => {
	// 	// Arrange
	// 	render(<Greeting />);

	// 	// Act
	// 	const buttonElement = screen.getByRole("button");
	// 	userEvent.click(buttonElement);

	// 	// Assert
	// 	const outputElement = screen.queryByText("good to see you", { exact: false });
	// 	expect(outputElement).toBeNull();
	// });
	it("should not render 'good to see you' if the button was clicked", () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);

		// Assert
		const outputElement = screen.queryByText(/good to see you/i);
		expect(outputElement).toBeNull();
	});
});
