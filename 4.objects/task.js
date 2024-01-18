"use strict"
function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	return this.marks ? (this.marks.length? this.marks.push(...marks) : this.marks = marks): null;
}

Student.prototype.getAverage = function () {
	return this.marks && this.marks.length ? this.Average = this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length : this.Average = 0;
}

Student.prototype.exclude = function (reason) {
	if(reason){
	delete this.subject
	delete this.marks
	this.excluded = reason
	}
}
Student.prototype.hasMarks = function () {
	return this.marks? true : false
}



let vlad = new Student('vlad', 'male', 26)
vlad.setSubject('math')
vlad.addMarks()
vlad.addMarks()

vlad.getAverage()
vlad.exclude()
console.log(vlad.hasMarks())
console.log(vlad);

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(5, 5, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}


let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
student2.addMarks(5, 5, 5);
student2.getAverage();

console.log(student2.hasMarks())
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}