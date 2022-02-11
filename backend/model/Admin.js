const mongoose=require("mongoose");
const { Schema } = mongoose;
const validator=require("validator");

const adminSchema=new Schema({
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
    },
    defaultcity:{
        type:String,
        default:null
    }
});
const Admin=new mongoose.model('admin',adminSchema);
module.exports=Admin;