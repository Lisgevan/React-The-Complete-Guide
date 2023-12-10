import { useEffect, useState } from "react";

function ProgressBar({ max }) {
	const [remainingTime, setRemainingTime] = useState(max);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("INTERVAL");
			setRemainingTime(prevTime => {
				return prevTime - 10;
			});
		}, 10);
		return () => {
			console.log("INTERVAL IS CLEARED");
			clearTimeout(interval);
		};
	}, []);

	return <progress style={{ width: "100%" }} value={remainingTime} max={max} />;
}

export default ProgressBar;
