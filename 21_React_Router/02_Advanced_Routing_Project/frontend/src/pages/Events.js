import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
	const { events } = useLoaderData();

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	return (
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
			<Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
		</Suspense>
	);
}

export default EventsPage;

async function loadEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// return { isError: true, message: "Could not fetch events." };
		// throw new Response(JSON.stringify({ message: "Could not fetch events." }), { status: 500 });
		return json({ message: "Could not fetch events." }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
	}
}

export const loader = () => {
	return defer({
		events: loadEvents(),
	});
};

////Old code from exercise
// import { Link } from "react-router-dom";

// const EVENTS = [
// 	{ id: "event01", title: "Event 01" },
// 	{ id: "event02", title: "Event 02" },
// 	{ id: "event03", title: "Event 03" },
// ];

// function EnetsPage() {
// 	return (
// 		<>
// 			<h1>Events Page</h1>
// 			<ul>
// 				{EVENTS.map(event => (
// 					<li key={event.id}>
// 						<h1>{event.title}</h1>
// 						<Link to={event.id}>Go to Event.</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default EnetsPage;
