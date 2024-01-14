import { Suspense } from "react";
import { Link, useRouteLoaderData, json, redirect, defer, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
	const { event, events } = useRouteLoaderData("event-detail");

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await resolve={event}>{loadedEvent => <EventItem event={loadedEvent} />}</Await>
			</Suspense>
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
			</Suspense>
			<Link to=".." relative="path">
				Back
			</Link>
		</>
	);
}

export default EventDetailPage;

async function loadEvent(id) {
	const response = await fetch(`http://localhost:8080/events/${id}`);

	if (!response.ok) {
		throw json(
			{ message: "Could not find details for the selected event." },
			{
				status: 500,
			}
		);
	} else {
		const resData = await response.json();
		return resData.event;
	}
}

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

export async function loader({ request, params }) {
	const id = params.eventId;

	return defer({
		event: await loadEvent(id),
		events: loadEvents(),
	});
}

export const action = async ({ params, request }) => {
	const eventId = params.eventId;
	const response = await fetch(`http://localhost:8080/events/${eventId}`, { method: request.method });
	if (!response.ok) {
		throw json({ message: "Could not delete event." }, { statu: 500 });
	} else {
		return redirect("/events");
	}
};