const mongoose=require('mongoose')
console.log("Connection", process.env.MONGO_URL)
const connection =async () => {
    console.log("connection initiated")
    // let connect=mongoose.connect(process.env.MONGO_URL)

    let connect=mongoose.connect(process.env.MONGO_URL)
    if(connect){
        console.log("We are connected to mongobd")
    }
}

module.exports=connection;