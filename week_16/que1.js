

const input ="rohan"
let element=""
setTimeout(()=>{
    for (let index = 0; index < input.length; index++) {
      element += input[input.length-index-1]; 
    }
    console.log(element);
},2000)