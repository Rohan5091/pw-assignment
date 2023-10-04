
let student=new Object()
student.name="Rohan Malakar"
student.age=21
student.grade="A"

function Update_grade(student) {
  student.grade="A+"
}
Update_grade(student)
console.log(student);