const sentence="please please summit your assinment on time, your assinment are important"
const r="rohan"
function wordcounter(sentence) {
  const word=sentence.split(" ")
  word.map((eachword)=>{
    let count=0
    
    if (sentence.includes(eachword)) {
       count+=1
      }
      return console.log(`${eachword} => ${count}`)
   
  })
}
wordcounter(sentence)