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
	if(this.marks){
		return this.marks.length? this.marks.push(...marks) : this.marks = marks
	}
}

Student.prototype.getAverage = function () {
	return this.marks && this.marks.length ? this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length : 0;
}

Student.prototype.exclude = function (reason) {
	if(reason){
	delete this.subject
	delete this.marks
	this.excluded = reason
	}
}
