const array= [1,2,999,56,"mithun",1234,"pw"]

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   if (typeof element=="string") {
//     console.log("Found The Element String :",array[index])
//     index=array.length+1;
//   }
// }
let i=0
while (i<array.length) {
  if (typeof array[i]==="string") {
    console.log("Found The Element String :",array[i]);
    i=array.length+1;
  }
  i++
}
