import formatter from "../../utils/formater";
import classes from "./Results.module.css";

const Results = ({ resultData }) => {
	return (
		<table className={classes.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultData.map(result => {
					return (
						<tr key={result.year}>
							<td>{result.year}</td>
							<td>{formatter.format(result.savingsEndOfYear)}</td>
							<td>{formatter.format(result.yearlyInterest)}</td>
							<td>{formatter.format(result.totalInterest)}</td>
							<td>{formatter.format(result.savingsEndOfYear - result.totalInterest)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
