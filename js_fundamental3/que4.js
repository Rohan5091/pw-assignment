

let obj={
  make:"TATA",
  model:"NANO",
  year:"2016"
}

// function check_Property(obj,property) {
//   let arr=Object.keys(obj)
//   let a=arr.map((key)=>{
//     if (key===property) {
//       return(`the object has this property`);
//     } 
//      return(`the object has not this property`);
//   })
//   return a;
// }
// console.log(check_Property(obj,"make"));



// function check_Property(obj,property) {
//     let arr=Object.keys(obj)
//     arr.forEach((key)=>{
//       if (key===property) {
//         console.log(`the object has this property`);
         
//       } 
//     })
//   }
// check_Property(obj,"make");




function check_Property(obj,property) {
    let arr=Object.keys(obj)
      for (let index = 0; index < arr.length; index++) {
        if (arr[index]===property) {
          return(`the object has this property`);
        } 
      }
      return (`the object has not this property`);
  }
  console.log(check_Property(obj,"make"));


