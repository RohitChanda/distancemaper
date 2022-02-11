const mongoose=require("mongoose");
const { Schema } = mongoose;
const validator=require("validator");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new error("email is invalid");
            }
        }
    },
    password:{
        type:String,
        required:true
    }
});
const User=new mongoose.model('user',userSchema);
module.exports=User;