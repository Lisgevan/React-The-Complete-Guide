import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	state = {};

	componentDidCatch(error) {
		console.warn("ERROR!!!!!!", error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p>Something went wrong</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
