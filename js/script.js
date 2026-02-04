'use strict';

function Student (firstName, lastName, yearBorn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBorn = yearBorn;

    this.attendance = new Array(10);
    this.rating = new Array(10);

}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.yearBorn;
}

Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Student.prototype.present = function () {
    const index = this.attendance.findIndex(item => item === undefined);

    if (index !== -1) {
        this.attendance[index] = true;
    }
    else {
        console.log('Журнал відвідуваності заповнений')
    }
}

Student.prototype.mark = function (grade) {
    if (grade < 0 || grade > 10) {
        console.log('Оцінка повинна бути від 0 до 10')
        return;
    }
    const index = this.rating.findIndex(item => item === undefined);

    if (index !== -1) {
        this.rating[index] = grade;
    }
    else {
        console.log('Оцінки виставлені')
    }
}

Student.prototype.summary = function () {
    let sum = 0;
    let count = 0;

    for (let grade of this.rating) {
        if (grade !== undefined) {
            sum += grade;
            count++;
        }
    }
    const avgGrade = count > 0 ? sum / count : 0;

    let visits = 0;
    let totalLessons = 0;
    for (let status of this.attendance) {
        if (status !== undefined) {
            if (status === true) {
                visits++;
                totalLessons++;
            }
        }
    }
    const avgAttendance = totalLessons > 0 ? visits / totalLessons : 0;

    let verdict = '';

    if (avgGrade > 9 && avgAttendance > 0.9) {
        verdict = "Ух ти, який молодчинка!";
    } else if (avgGrade > 9 || avgAttendance > 0.9) {
        verdict = "Нормально, але можна краще";
    } else {
        verdict = "Редька!";
    }

    return `${this.firstName} ${this.lastName} (вік: ${this.getAge()}): ${verdict}`;
};

const student1 = new Student("Vlad", "Yedlenko", 2005);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();


console.log(student1.summary());


const student2 = new Student("Maks", "Shevchenko", 2003);
student2.mark(5);
student2.mark(5);
student2.mark(5);
student2.mark(5);
student2.mark(5);
student2.mark(5);

student2.present();
student2.present();
student2.present();
console.log(student2.summary());