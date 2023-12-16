import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	// useEffect(() => {
	// 	fetch("http://localhost:3000/places")
	// 		.then(response => response.json())
	// 		.then(resData => setAvailablePlaces(resData.places));
	// }, [] );

	// same as above using async function
	useEffect(() => {
		const fetchingData = (async () => {
			setIsFetching(true);

			try {
				const places = await fetchAvailablePlaces();

				navigator.geolocation.getCurrentPosition(position => {
					const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
					setAvailablePlaces(sortedPlaces);

					setIsFetching(false);
				});
			} catch (error) {
				setError({ message: error.message || "Could not find available places, please try again later." });
				setIsFetching(false);
			}
		})();
	}, []);

	if (error) {
		return <Error title="An error occured!" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching}
			loadingText="Fetching places data..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}

