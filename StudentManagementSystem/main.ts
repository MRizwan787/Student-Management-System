import Student from './Student';
import Course from './Course';

const mathCourse = new Course('Math 101', 500);
const historyCourse = new Course('History 101', 400);

const student1 = new Student('Alice');
const student2 = new Student('Bob');

student1.enroll(mathCourse.getName());
student1.enroll(historyCourse.getName());

student2.enroll(historyCourse.getName());

student1.payTuition(mathCourse.getPrice() + historyCourse.getPrice());

student1.showStatus();
student2.showStatus();
