// create express server
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
// console.log("dotenv",process.env)
const userRoutes=require('./routes/userRoutes')
// const User=require('./model/userModel')
const connection=require('./db/connection')
const express=require('express')
// console.log(express)

 const app=express()

 // start our server

 const PORT=8002;
 app.use(cors())
 connection()

 // root end point

 app.get('/',(req,res)=>{

    //res.send("welcome to the App!!!")

    // res.send("<h1>Welcome to NodeJs</h1>") //html

    //res.send(["10","20","30",15,85]) //array

    // res.send({
    //     "day1":"node",
    //     "time":"morning",
    //     "days":"mon-fri",
    //     "insttute":"guvi"
    // }) //object

   //  res.send([
   //      {name:"guvi", age:10},
   //      {name:"aaa", age:10},
   //      {name:"bbb", age:10},
   //      {name:"ccc", age:10}
   //  ])

   res.send([
      {name:"guvi",email:"guvi@gmail.com",age:10,contact_num:3456789},
      {name:"Harish",email:"harish@gmail.com",age:10,gender:"Male",contact_num:4567987},
      {name:"Neeraj",email:"Neeraj@gmail.com",age:10,gender:"Male"},
      {name:"Indu",email:"Indu@gmail.com",age:10,gender:"Female",contact_num:9876590},
      {name:"Anjali",email:"Anjali@gmail.com",gender:"Female",age:10,contact_num:1234098},
      {name:"Dinesh",email:"Dinesh@gmail.com",gender:"Male",age:10},
      {name:"Firoz",email:"Firoz@gmail.com",gender:"Male",age:10,contact_num:1234509093},
      {name:"Omprakash",email:"Omprakash@gmail.com",gender:"Male",age:10}
  ])
})

    



 app.get('/home',(req,res)=>{
   res.send("Home Page")

    })
    
app.use(express.json()) 
app.use(userRoutes) // pass the middlewear

 // we make it listen to the port 

 app.listen(PORT,()=>{
    console.log("Server has started at ", PORT)
 })