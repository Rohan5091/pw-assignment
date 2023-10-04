const sentence ="please please submit your assignment on time, your assinments are important";

function wordcounter(sentence) {
  
  let arr=sentence.split(" ")
  let set=new Set();
  let maped_array=[];
  
  arr.map((value)=>{
     let count=1;
     if (set.has(value)) {
      count++
      maped_array.push([value,count])
     }
     else{
      maped_array.push([value,count])
     }
     set.add(value)
  })
   return(new Map(maped_array))
}

let result=wordcounter(sentence)
console.log(result);