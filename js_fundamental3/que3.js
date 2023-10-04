let obj={
  make:"TATA",
  model:"NANO",
  year:"2016"
}

function count_property(obj){
    return Object.keys(obj).length
}
console.log(count_property(obj));