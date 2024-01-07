// import { useState, useEffect } from "react";
import Error from "./Error";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";

const requestConfig = {};

function Meals() {
	// const [loadedMeals, setLoadedMeals] = useState([]);
	// useEffect(() => {
	// 	async function fetchMeals() {
	// 		const response = await fetch("http://localhost:3000/meals");
	// 		if (!response.ok) {
	// 			// handle failed response
	// 		}
	// 		const meals = await response.json();
	// 		setLoadedMeals(meals);
	// 	}
	// 	fetchMeals();
	// }, []);
	//CHANGED ALL COMMENTS IT WITH CUSTOM HOOK FROM useHttp.js

	const { data: loadedMeals, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);

	if (isLoading) {
		return <p className="center">Fetching meals...</p>;
	}

	if (error) {
		return <Error title="Failed to fetch meals" message={error} />;
	}

	return (
		<ul id="meals">
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}

export default Meals;
