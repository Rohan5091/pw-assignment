//


let car={
  make:"TATA",
  model:"NANO",
  year:"2016"
}

function Display_properties(car) {
 
  let array=Object.keys(car)
   array.forEach((key)=>{ 
    console.log(`The key is ${key} and value is ${car[key]}`);
   })
}
Display_properties(car)


// function Display_properties(car){
//   for (let key in car){
//     console.log(`${key} : ${car[key]}`)
//     }
// }




