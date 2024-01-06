"use strict"
const solveEquation = (a, b, c) => {
	let arr = [];
	let d = Number(b ** 2 - 4 * a * c);
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a))
	} else if (d === 0) {
		arr.push(-b / (2 * a))
	};
	return arr;
}
console.log(solveEquation(3, -5, -2));
console.log(solveEquation(4, -4, 1));
console.log(solveEquation(1, -2, 3));
const calculateTotalMortgage = (percent, contribution, amount, countMonths) => {
	
	const percentToMultiplier = percent /100
	const monthMultiplier = percentToMultiplier / 12
	const loanBody = amount - contribution
	const MonthlyPayment = loanBody*(monthMultiplier +(monthMultiplier/(((1 + monthMultiplier)**countMonths)-1)))
	const total = MonthlyPayment * countMonths
	return total.toFixed(2)
}
