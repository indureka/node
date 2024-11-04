
const {name,lname,age,sum,add,compute,getNotes}=require('./utils/file')

console.log("variable-",name," ", lname, " ", age)
sum()
add(5,6)
let xyz=compute(7,8)
console.log("function-return keyword", xyz)
const get=getNotes()
console.log("got the notes.........", get)