"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.id = this.generateStudentID();
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    generateStudentID() {
        // Implement logic to generate a 5-digit unique student ID
        // Example: return a random 5-digit number
        return (Math.floor(Math.random() * 90000) + 10000).toString();
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance += amount;
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
exports.default = Student;
