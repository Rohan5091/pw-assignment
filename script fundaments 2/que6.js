const productDetails= {
  name:"Apple 2020 macbook air laptop",
  price:82000,
  colour:"Grey",
  hard_disk:"256 GB"
}
//const detailes=Object.entries(productDetails)
// console.log(productDetails);


console.log("Below are the product detailes,");
for (let name in productDetails){
console.log(`${name} : ${productDetails[name]}`)
}