class Student {
    private id: string;
    private name: string;
    private courses: string[];
    private balance: number;
  
    constructor(name: string) {
      this.id = this.generateStudentID();
      this.name = name;
      this.courses = [];
      this.balance = 0;
    }
  
    private generateStudentID(): string {
      // Implement logic to generate a 5-digit unique student ID
      // Example: return a random 5-digit number
      return (Math.floor(Math.random() * 90000) + 10000).toString();
    }
  
    enroll(course: string): void {
      this.courses.push(course);
    }
  
    viewBalance(): number {
      return this.balance;
    }
  
    payTuition(amount: number): void {
      this.balance += amount;
    }
  
    showStatus(): void {
      console.log(`Student ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  export default Student;
  