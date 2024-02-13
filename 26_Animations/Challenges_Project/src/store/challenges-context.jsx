import { createContext, useState } from "react";

import workingOnComputerImg from "../assets/working-on-computer.png";

export const ChallengesContext = createContext({
	challenges: [],
	addChallenge: () => {},
	updateChallengeStatus: () => {},
});

export default function ChallengesContextProvider({ children }) {
	const [challenges, setChallenges] = useState([
		{
			title: "title.current.value1",
			description: "description.current.value",
			deadline: "deadline.current.value",
			image: { src: workingOnComputerImg, alt: "Person doing work on a computer." },
			id: "current1",
			status: "active",
		},
		{
			title: "title.current.value2",
			description: "description.current.value",
			deadline: "deadline.current.value",
			image: { src: workingOnComputerImg, alt: "Person doing work on a computer." },
			id: "current2",
			status: "active",
		},
		{
			title: "title.current.value3",
			description: "description.current.value",
			deadline: "deadline.current.value",
			image: { src: workingOnComputerImg, alt: "Person doing work on a computer." },
			id: "current3",
			status: "active",
		},
	]);

	function addChallenge(challenge) {
		setChallenges(prevChallenges => [
			{ ...challenge, id: Math.random().toString(), status: "active" },
			...prevChallenges,
		]);
	}

	function deleteChallenge(challengeId) {
		setChallenges(prevChallenges => prevChallenges.filter(challenge => challenge.id !== challengeId));
	}

	function updateChallengeStatus(challengeId, newStatus) {
		setChallenges(prevChallenges =>
			prevChallenges.map(challenge => {
				if (challenge.id === challengeId) {
					return { ...challenge, status: newStatus };
				}
				return challenge;
			})
		);
	}

	const challengesContext = {
		challenges,
		addChallenge,
		deleteChallenge,
		updateChallengeStatus,
	};

	return <ChallengesContext.Provider value={challengesContext}>{children}</ChallengesContext.Provider>;
}

