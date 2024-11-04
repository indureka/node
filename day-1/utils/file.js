const name="guvi geek"
console.log(name)

const lname="Pvt. ltd."

const age=10

const sum = () => {
    console.log("normal function", 2+2)
}

sum()

const add = (a,b) => {
    console.log("parameter function", a+b)
}
add(2,5)

const compute = (a,b) => {
    return a+b
}

const abc=compute(5,2)
console.log("func with return",abc)

const getNotes = () => {
    return "Your notes is here... please collect it from staff room"
}

getNotes()

module.exports={name,lname,age,sum,add,compute,getNotes}