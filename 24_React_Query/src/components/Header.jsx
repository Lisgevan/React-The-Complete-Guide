import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
	const fetching = useIsFetching(); // returnd 0 if react-query is not fetching any data now or a higher number if it is.

	return (
		<>
			<div id="main-header-loading">{fetching > 0 && <progress />}</div>
			<header id="main-header">
				<div id="header-title">
					<h1>React Events</h1>
				</div>
				<nav>{children}</nav>
			</header>
		</>
	);
}

