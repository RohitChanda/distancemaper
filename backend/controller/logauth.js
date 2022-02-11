require('../db/db');//add db file
const User=require('../model/User');
const Admin=require('../model/Admin');
module.exports.userlogin =async  (req, res) => { //user
    try {
        const {email,password}=req.body;
        console.log(email)
        console.log(password)
        const UserDetails=await User.find({email:email,password:password});
       
        if(UserDetails.length==0){
            res.status(200).json({
                success: false,
               data:"Please Add proper credentials"
            });
        }else{
            console.log(UserDetails)
            res.status(200).json({
                success: true,
               data:"User Login Successfull",
               email:email
            });

        }
       
    
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error
        }]);
    }
}
module.exports.adminlogin = async (req, res) => { //admin
    try {
        // console.log(req.body)
        const {email,password}=req.body;
        console.log(email)
        console.log(password)
        // const insertAdmin=new Admin({
        //     email:email,
        //     password:pwd
        // })
        const adminDetails=await Admin.find({email:email,password:password});
        if(adminDetails.length==0){
            res.status(200).json({
                success: false,
               data:"Please Add proper credentials"
            });
        }else{
            console.log(adminDetails);
            res.status(200).json({
                success: true,
               data:"Admin Login Successfull",
               email:email
            });

        }
            
        
        // const admin=await insertAdmin.save();
       
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error
        }]);
    }
    
}