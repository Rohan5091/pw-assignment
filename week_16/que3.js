// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


let array_item=[
  {
    item:"item1",
    price:20
  },
  {
    item:"item2",
    price:10
  },
  {
    item:"item3",
    price:65
  },
  {
    item:"item4",
    price:56
  }
]

let array_INR=array_item.map((obj)=>{
  return {
      ...obj,
      price:obj.price*80
  }
})
console.log(array_INR);
