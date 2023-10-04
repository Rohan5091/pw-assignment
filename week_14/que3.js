// const students=[
// {
//   name:"mithun",
//   marks:95
// },
// {
//   name:"prabhir",
//   marks:75
// },
// {
//   name:"alka",
//   marks:92
// },
// {
//   name:"shivam",
//   marks:70
// },
// {
//   name:"parman",
//   marks:99
// }
// ]
//  function Checkresults(name)
//  {
//     students.forEach((obj)=>
//     {
        
//       if (obj.name==name) 
//       {
        
//         if (obj.marks>90)
//         {
             
//           return console.log(`Congratulation ${obj.name}! you have cleared the exam`);
//         }
//         else  
//         {
//           return console.log (`Sorry ${obj.name}! you have not cleared the exam`);
//         }
//       }
//     else{
//       return console.log (`Invalid user`);
//         }
//     }
//     )
//  }
//  Checkresults("mithun");
const students = [
  {
    name: "mithun",
    marks: 95
  },
  {
    name: "prabhir",
    marks: 75
  },
  {
    name: "alka",
    marks: 92
  },
  {
    name: "shivam",
    marks: 70
  },
  {
    name: "parman",
    marks: 99
  }
];

function Checkresults(name) {
  const student = students.find(obj => obj.name === name);

  if (student) {
    if (student.marks > 90) {
      return `Congratulations ${student.name}! You have cleared the exam`;
    } else {
      return `Sorry ${student.name}! You have not cleared the exam`;
    }
  } else {
    return "Invalid user";
  }
}

console.log(Checkresults("mithun"));
