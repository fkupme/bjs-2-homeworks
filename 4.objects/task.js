function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	marks.length ? this.marks = marks : null;
}

Student.prototype.getAverage = function () {
	this.hasOwnProperty('marks') ? this.Average = this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length : null;
}

Student.prototype.exclude = function (reason) {
	if(reason){
	delete this.subject
	delete this.marks
	this.excluded = reason
	}
}



let vlad = new Student('vlad', 'male', 26)
vlad.setSubject('math')
vlad.addMarks(2, 3, 5)
vlad.getAverage()
vlad.exclude()
console.log(vlad);

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}


let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}