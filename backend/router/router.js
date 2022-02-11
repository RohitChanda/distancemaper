const express=require("express");
const router=new express.Router();
const distanceMaperController=require('../controller/distancemaper');
const loginAuth=require('../controller/logauth');
router.post('/api/userlogin',loginAuth.userlogin);
router.post('/api/adminlogin',loginAuth.adminlogin);


router.post('/api/admincity',distanceMaperController.addAdminCity);

router.post('/api/finddistance',distanceMaperController.handelDistance);



module.exports=router;