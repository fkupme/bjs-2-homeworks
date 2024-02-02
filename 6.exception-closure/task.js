const parseCount = (val) => {
	if(Number.isNaN(Number.parseFloat(val))) {
		throw new Error('Невалидное значение')
	} 
	return Number.parseFloat(val)
}
const validateCount = (val) => {
	try {
		return parseCount(val)
	} catch (error) {
		return error
	}
}

class Triangle{
	constructor(a, b, c) {
		if(a + b <= c || b + c <= a || c + a <= b) {
			throw new Error('Треугольник с такими сторонами не существует')
		}else{
		this.a = a
		this.b = b
		this.c = c
	}
	}
	get perimeter () {
		return this.a + this.b + this.c
		
	}
	get area () {
		const p = this.perimeter / 2
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
	}


}

class ErrorTriangle {
	constructor(){
		
	}
	get perimeter () {
		return 'Ошибка! Треугольник не существует'
	}
	get area () {
		return 'Ошибка! Треугольник не существует'
	}
}

const errorTriangle =(a, b, c) =>{
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return new ErrorTriangle()
	}	
}
