
class Student{
  constructor(name,Email){
    this.name=name
    this.Email=Email
  }
  showCourses(){

  }
  enrolledcourse(){

  }

}
class Admission extends Student{
 
 constructor(name,Email){
  super(name,Email)
 }
 enrollStudent(Student){
  console.log(`${this.name} is enrolled`);
 }
 showenrolledStudent(){
  console.log("enrolled Student :");
  console.log(`${this.name} (${this.Email})`);

 }
 assignCourses(Student,course){
  console.log(`${Student} is enrolled in ${course}`);
 }

}