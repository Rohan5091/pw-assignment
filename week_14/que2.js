function calculatetotalCartValues(product1,product2,product3) {
   return product1+product2+product3;
}
let product1price=125;
let product2price=20;
let product3price=30;

 let sum=calculatetotalCartValues(product1price,product2price,product3price);
 console.log(`The total cart value is ${sum}`);