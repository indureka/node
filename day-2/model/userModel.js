const mongoose=require('mongoose')
const validator=require('validator')
const UserSchema={
        // define your scheme
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true,
            validate(value){
                if(value<0){
                        throw new Error("Age must be a +ve integer")
                }
            },
            default:0
        },
        email:{
            type:String,
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    //false
                    throw new Error("Email Invalid")
                }
            }
        },
        phoneNumber:{
            type:String,
            validate(value){
                if(!validator.isMobilePhone(value)){
                    throw new Error("invalid Number")
                }
            }
        },
        password: {
        type:String,
        require:true,
        validate(value){
            if(value==='password'){
                throw new Error("'Password' - isn't accepted")
            }
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is weak");
            }
        }
    }
        
}
const User=mongoose.model('User', UserSchema)
module.exports=User