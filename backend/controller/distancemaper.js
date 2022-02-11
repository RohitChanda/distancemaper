require('../db/db');//add db file
const User=require('../model/User');
const Admin=require('../model/Admin');
module.exports.addAdminCity=async(req,res)=>{
    try {
        const {email,city}=req.body;
        const result = await Admin.find({ email: email});
        let data;
        if(!result.length==0){

            const updateCity=await Admin.updateOne({_id:result[0]._id},{ $set:{defaultcity:city}});
            data="City Add as a Default city";
            res.status(200).json({
                success: true,
                data:data
            });

        }else{
            data="City Add Fail";
            res.status(200).json({
                success: false,
                data:data
            });

        }

       
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error
        }]);
    }
}
















module.exports.handelDistance = async (req, res) => {
    
    try {
        const cityName = req.body.city.toLowerCase();
        const admin = await Admin.find().select({defaultcity:1});
        const adminCity=admin[0].defaultcity;
        const geoUser=await getMyGeoLocation(cityName) ;
        const geoAdmin=await getMyGeoLocation(adminCity);
       const dis=findDistance(geoUser, geoAdmin);
        console.log("distance between "+cityName+" and "+ adminCity+" is : "+dis+" km")
        let result_flag;
        if(dis<100){
            result_flag="yes"
        }else if(dis>100){
            result_flag="no"
        }
        res.status(200).json({
            success: true,
            distance: dis,
            flag:result_flag
        });
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            res: error

        }]);
    }
}





const getMyGeoLocation = (city) => {
    var https = require('https');
    return new Promise((resolve, reject) => {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=2adaafa488906b9f62a0d75c7680c0c9&units=metric';
        https.get(url, (res) => {
            let error;
            if (error) {
                console.error(error.message);
                res.resume();
            }
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data).coord;
                    resolve(parsedData);
                } catch (e) {
                    reject(e.message);
                }
            });
        }).on('error', (e) => {
            reject(`Got error: ${e.message}`);
        });

    });
}
const findDistance = (geoUser, geoAdmin) => {
  
  
    const lat1 = geoUser.lat * Math.PI / 180
    const lon1 = geoUser.lon * Math.PI / 180;

    const lat2 = geoAdmin.lat * Math.PI / 180
    const lon2 = geoAdmin.lon * Math.PI / 180;
    
    
   
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;
    // calculate the result
    const dis=Math.ceil(c * r);
   return dis;
}
