const User=require('../model/userModel')
const express=require('express')
const router=express.Router()


//post methods
router.post('/adduser',async(req,res)=>{
    try{ 
        //console.log(req.body)
    const newUser=new User(req.body)
    await newUser.save()
    // res.send(newUser)
    res.status(200).send(newUser)
    }
    catch(e){
        res.status(500).send({"message":"Some Internal Error"})
    }

})

//getAll User
router.get('/users', async(req,res)=>{
    try{
        const getAllUser=await User.find({})
        if(!getAllUser){
           return res.status(400).send({"message":"Users Not Available"})
        }
        res.status(200).send(getAllUser)
    }
 catch(e){
    res.status(500).send({"message":"Some Internal Error"})
 }
})

//get single user >> 
//retrive :id
//req.params

router.get('/users/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
  // let getUser=await User.find({_id:req.params.id})
  let getUser=await User.findById(req.params.id)
  if(!getUser){
    return res.status(400).send({"message":"User Not found"})
  }
  res.status(200).send(getUser)
    }
    catch(e){
        res.status(500).send({"message":"Some Internal Error"})
    }
  
})

//update
router.put('/users/:id',async(req,res)=>{
    //where you want?
    //what you want?
    try {
    const updateUser=await User.
    findByIdAndUpdate(req.params.id,req.body,
        {new:true,runValidators:true}
    )
    if(!updateUser){
        return res.status(404).send({"message":"User not found"})
    }
    res.status(200).send(updateUser)
} catch (e) {
    res.status(500).send({"message":"Some Internal Error"})
}
})


//delete
router.delete('/users/:id',async(req,res)=>{
    try{ 
    let deleteUser=await User.
    findByIdAndDelete(req.params.id)
    if(!deleteUser){
        return res.status(404).send({"message":"User not found"})
    }
    res.status(200).send({
        "message":"Deleted Successfully",
        deleteUser
    })
} catch(e) {
        res.status(500).send({"message":"Some Internal Error"})
}
})


router.get('/help',(req,res)=>{
    res.send("Please help us .......... donate!!!")
})

module.exports=router