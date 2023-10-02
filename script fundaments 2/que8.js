
const eventDate="2023-08-31"

function calculateEventDate(eventDate) {
  
  const currentDate=new Date()
  
  const cal=new Date(eventDate)
  
  const remainingmilisec=(currentDate)-(cal)
  
  const remainingDays=Math.floor(remainingmilisec/(1000*60*60*24))
  return remainingDays
}
console.log(calculateEventDate(eventDate));