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
