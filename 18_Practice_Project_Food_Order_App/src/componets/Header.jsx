import { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const totalCartItelms = cartCtx.items.reduce((totalNumbersOfItems, item) => {
		return totalNumbersOfItems + item.quantity;
	}, 0);

	function handleShowCart() {
		userProgressCtx.showCart();
	}

	return (
		<header id="main-header">
			<div id="title">
				<img src={logoImg} alt="React food logo" />
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button onClick={handleShowCart} textOnly>
					Cart({totalCartItelms})
				</Button>
			</nav>
		</header>
	);
}

export default Header;
