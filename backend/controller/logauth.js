require('../db/db');//add db file
const User=require('../model/User');
const Admin=require('../model/Admin');
module.exports.userlogin =async  (req, res) => {
    try {
        const {email,pwd}=req.body;
        console.log(email)
        console.log(pwd)
        const insertUser=new User({
            email:email,
            password:pwd
        })
            
        
        const admin=await insertUser.save();
        res.status(200).json({
            success: true,
           data:"signup user"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error
        }]);
    }
}
module.exports.adminlogin = async (req, res) => {
    try {
        const {email,pwd}=req.body;
        console.log(email)
        console.log(pwd)
        const insertAdmin=new Admin({
            email:email,
            password:pwd
        })
            
        
        const admin=await insertAdmin.save();
        res.status(200).json({
            success: true,
           data:"signup admin"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error
        }]);
    }
    
}