function getArrayParams(...arr) {
	const min = () => {
		return Math.min(...arr);
	}

	const max = () => {
		return Math.max(...arr);
	}

	const avg = () => {
		return Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2))
	}

	return { min: min(), max: max(), avg: avg() };
}

function summElementsWorker(...arr) {
	return arr.length ? arr.reduce((a, b) => a + b, 0) : 0
}

function differenceMaxMinWorker(...arr) {
	return arr.length ? Math.max(...arr) - Math.min(...arr) : 0
}

function differenceEvenOddWorker(...arr) {
	return arr.length ? arr.reduce((a, v) => v % 2 === 0 ? a + v : a, 0) - arr.reduce((a, v) => v % 2 !== 0 ? a + v : a, 0) : 0
}

function averageEvenElementsWorker(...arr) {
	return arr.length ? arr.reduce((a, v) => v % 2 === 0 ? a + v : a, 0) / arr.filter((v) => v % 2 === 0).length : 0
}



function makeWork(arrOfArr, func) {
	const arrayOfResults = arrOfArr.map((arr) => func(...arr))
	return Math.max(...arrayOfResults)

}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
