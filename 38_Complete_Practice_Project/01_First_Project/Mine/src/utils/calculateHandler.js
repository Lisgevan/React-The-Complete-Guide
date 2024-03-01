const calculateHandler = userInput => {
	// Should be triggered when form is submitted
	// You might not directly want to bind it to the submit event on the form though...

	const yearlyData = []; // per-year results

	let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
	const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
	const expectedReturn = +userInput["expected-return"] / 100;
	const duration = +userInput["duration"];
	let totalInterest = 0;

	// The below code calculates yearly results (total savings, interest etc)
	for (let i = 0; i < duration; i++) {
		const yearlyInterest = currentSavings * expectedReturn;
		totalInterest += yearlyInterest;
		currentSavings += yearlyInterest + yearlyContribution;
		yearlyData.push({
			// feel free to change the shape of the data pushed to the array!
			year: i + 1,
			yearlyInterest: yearlyInterest,
			savingsEndOfYear: currentSavings,
			yearlyContribution: yearlyContribution,
			totalInterest: totalInterest,
		});
	}
	// console.log("1", yearlyData[0].year);
	// console.log("2", yearlyData[0].savingsEndOfYear);
	// console.log("3", yearlyData[0].yearlyInterest);
	// console.log("4", yearlyData[0].totalInterest);
	// console.log("5", yearlyData[0].totalInterest);
	// console.log("---------");
	// console.log("1", yearlyData[1].year);
	// console.log("2", yearlyData[1].savingsEndOfYear);
	// console.log("3", yearlyData[1].yearlyInterest);
	// console.log("4", yearlyData[1].totalInterest);
	// console.log("5", "********");

	// do something with yearlyData ...
	// console.log(yearlyData);
	// year = year
	// Total Savings = savingsEndOfYear
	// Interest = yearlyInterest
	// Total interest = totalInterestBefore + yearlyInterest
	// Invested Capital = current savings + yearlyContribution * year
	return yearlyData;
};
export default calculateHandler;
