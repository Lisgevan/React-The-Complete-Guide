import Cart from "./componets/Cart";
import Checkout from "./componets/Checkout";
import Header from "./componets/Header";
import Meals from "./componets/Meals";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
	return (
		<UserProgressContextProvider>
			<CartContextProvider>
				<Header />
				<Meals />
				<Cart />
				<Checkout />
			</CartContextProvider>
		</UserProgressContextProvider>
	);
}

export default App;

