import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";

export default function EventDetails() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ["events", { id }],
		queryFn: ({ signal }) => {
			return fetchEvent({ id, signal });
		},
	});

	const { mutate } = useMutation({
		mutationFn: deleteEvent,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries({ queryKey: ["events"], refetchType: "none" });
		// 	navigate("/events");
		// 	console.log("DELETED EVENT");
		// },
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["events"], refetchType: "none" });
			navigate("/events");
			console.log("DELETED EVENT");
		},
	});

	const handleDeleteEvent = () => {
		mutate({ id });
	};

	let content;

	if (data) {
		const formatedDate = new Date(data.date).toLocaleDateString("en-UK", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});

		content = (
			<>
				<header>
					<h1>{data.title}</h1>
					<nav>
						<button onClick={handleDeleteEvent}>Delete</button>
						<Link to="edit">Edit</Link>
					</nav>
				</header>
				<div id="event-details-content">
					<img src={`http://localhost:3000/${data.image}`} alt={data.title} />
					<div id="event-details-info">
						<div>
							<p id="event-details-location">{data.location}</p>
							<time dateTime={`Todo-DateT$Todo-Time`}>
								{formatedDate}, {data.time}
							</time>
						</div>
						<p id="event-details-description">{data.description}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			<article id="event-details">
				{isPending && (
					<div id="event-details-content" className="center">
						<p>Loading event info...</p>
					</div>
				)}
				{isError && (
					<div id="event-details-content" className="center">
						<ErrorBlock title="An error occured!" message={error.info?.message || "Failed to fetch event!"} />
					</div>
				)}
				{content}
			</article>
		</>
	);
}

