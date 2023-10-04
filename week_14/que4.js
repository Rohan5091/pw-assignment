const products=[
  { name:"laptop",price:120000},
  { name:"mobile",price:70000},
  { name:"laptop bag",price:20000},
  { name:"watch",price:20000},
  { name:"mobile charger",price:15000}
]


function maxproductprice(products) {
  var maxprice=-1;
  var productname;
  products.forEach(product => {
    if (product.price>maxprice) {
         maxprice=product.price;
         productname=product.name;
    } 
  }
  );
  return (`the product with maximum price is ${productname} and its price is ${maxprice}.`);
  ;
}


function minproductprice(products) {
  var minprice=Infinity;
  var productname;
  products.forEach(product => {
    if (product.price<minprice) {
          minprice=product.price;
          productname=product.name;
    }   
  }
  );
  return (`the product with minimum price is ${productname} and its price is ${minprice}.`);
}
console.log(maxproductprice(products));
console.log(minproductprice(products));
