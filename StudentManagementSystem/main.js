"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Course_1 = __importDefault(require("./Course"));
const mathCourse = new Course_1.default('Math 101', 500);
const historyCourse = new Course_1.default('History 101', 400);
const student1 = new Student_1.default('Alice');
const student2 = new Student_1.default('Bob');
student1.enroll(mathCourse.getName());
student1.enroll(historyCourse.getName());
student2.enroll(historyCourse.getName());
student1.payTuition(mathCourse.getPrice() + historyCourse.getPrice());
student1.showStatus();
student2.showStatus();
