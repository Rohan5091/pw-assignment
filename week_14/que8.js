
const eventDate="2023-10-31"

function calculateEventDate(eventDate) {
  
  const currentDate=new Date()
  
  const cal=new Date(eventDate)
  
  const remainingmilisec=(cal)-(currentDate)
  console.log(remainingmilisec);
  const remainingDays=Math.floor(remainingmilisec/(1000*60*60*24))
  return remainingDays
}
console.log(calculateEventDate(eventDate));