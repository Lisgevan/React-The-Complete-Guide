export async function fetchAvailablePlaces() {
	const response = await fetch("http://localhost:3000/places");
	const resData = await response.json();

	console.log(response.ok);
	if (!response.ok) {
		// if response.ok is true status is of 200 or 300 category, if not of 400 or 500
		throw new Error("Failed to fetch places");
	}
	return resData.places;
}

export async function updateUserPlaces(places) {
	const response = await fetch("http://localhost:3000/user-places", {
		method: "PUT",
		body: JSON.stringify({ places }),
		headers: { "Content-Type": "application/json" },
	});

	const resData = await response.json();

	if (!response.ok) {
		// if response.ok is true status is of 200 or 300 category, if not of 400 or 500
		throw new Error("Failed to update user data");
	}

	return resData.message;
}

export async function fetchUserPlaces() {
	const response = await fetch("http://localhost:3000/user-places");
	const resData = await response.json();

	console.log(response.ok);
	if (!response.ok) {
		// if response.ok is true status is of 200 or 300 category, if not of 400 or 500
		throw new Error("Failed to fetch user places");
	}
	return resData.places;
}
