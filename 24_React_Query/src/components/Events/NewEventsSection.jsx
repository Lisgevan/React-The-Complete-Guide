import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../../util/http";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function NewEventsSection() {
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents,
		staleTime: 5000, // delay between two executions of the query function - default is 0 //
		// gcTime: 18000, // how long the data is stored in memory cache - default is 5 minutes //
	});

	let content;

	if (isPending) {
		content = <LoadingIndicator />;
	}

	if (isError) {
		content = <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch events"} />;
	}

	if (data) {
		content = (
			<ul className="events-list">
				{data.map(event => (
					<li key={event.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<section className="content-section" id="new-events-section">
			<header>
				<h2>Recently added events</h2>
			</header>
			{content}
		</section>
	);
}

