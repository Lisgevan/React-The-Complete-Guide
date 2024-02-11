import Head from "next/head";

import { Fragment } from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Ro%C3%9FbachNMB-Herzer.JPG",
		address: "Some Address 1, 12345, SomeCity",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim luctus metus nec fermentum. Duis malesuada massa quis egestas tempor",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Marientor%2C_Naumburg.JPG",
		address: "Some Address 2, 12345, SomeCity",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim luctus metus nec fermentum. Duis malesuada massa quis egestas tempor",
	},
	{
		id: "m3",
		title: "A Third Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Basel_2012-09-28_Mattes_%28151%29.JPG",
		address: "Some Address 3, 12345, SomeCity",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim luctus metus nec fermentum. Duis malesuada massa quis egestas tempor",
	},
	{
		id: "m4",
		title: "A Fourth Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Albertville_place_de_l%27Europe.JPG",
		address: "Some Address 4, 12345, SomeCity",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim luctus metus nec fermentum. Duis malesuada massa quis egestas tempor",
	},
];

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="Browse a huge list of highly React meetups!" />
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }
//

export async function getStaticProps() {
	// fetch data from an API
	const client = await MongoClient.connect(
		"mongodb+srv://MongoDbAdmin:UFmCxH2WmHV5a8rf@reactthecompleteguidecl.icuaglo.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups:
				meetups.map(meetup => ({
					title: meetup.title,
					address: meetup.address,
					image: meetup.image,
					id: meetup._id.toString(),
				})) || DUMMY_MEETUPS,
			revilidate: 1, // regenerated every 10 seconds
		},
	};
}

export default HomePage;
