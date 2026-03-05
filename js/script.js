class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((a, b) => a + b) / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1 && index < 25) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1 && index < 25) {
            this.attendance[index] = false;
        }
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const records = this.attendance.filter(status => status !== null);

        if (records.length === 0) return "Дані відсутні";

        const attendanceRate = records.filter(status => status === true).length / records.length;

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const topStudent = new Student("Андрій", "Шевченко", 2005, [98, 95, 99, 100]);
const goodStudent = new Student("Оксана", "Петренко", 2004, [88, 97, 90, 88]);
const badStudent = new Student("Іван", "Іванов", 2003, [60, 70, 55, 65]);

for (let i = 0; i < 22; i++) topStudent.present();
console.log(topStudent.firstName, topStudent.summary());

goodStudent.present();
goodStudent.present();
goodStudent.absent();
console.log(goodStudent.firstName, goodStudent.summary());

badStudent.absent();
badStudent.absent();
console.log(badStudent.firstName, badStudent.summary());