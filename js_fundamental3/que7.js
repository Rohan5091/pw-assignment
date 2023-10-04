


let  New_map = new Map();

function add(name,age,email) {
  New_map.set("name",name)
  New_map.set("age",age)
  New_map.set("email",email)
}
function update(name,age,email) {
  New_map.set("name",name)
  New_map.set("age",age)
  New_map.set("email",email)
}
function delete_map(parameter) {
  New_map.forEach((value,key)=>{
    if (key==parameter) {
      New_map.delete(parameter)
    } 
  })
}
add("rohan",20,"rohan@gmail.com")
update("malakar",20,"rohanmalakar@gmail.com")
delete_map("name")
console.log(New_map);