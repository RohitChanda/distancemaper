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
        const adminCity = "delhi";
        console.log(cityName);
        // const geoUser=await getMyGeoLocation(cityName) ;
        const geoUser = { lat: 22.5414185, lng: 88.3576912 };
        //   const geoAdmin=await getMyGeoLocation(adminCity);
        const geoAdmin = { lat: 28.6517178, lng: 77.2219388 };
        
        const dis=findDistance(geoUser, geoAdmin);
        console.log("distance in KM : "+dis);
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
        let url = 'https://api.opencagedata.com/geocode/v1/json?q=' + city + '&key=17be87cb887d4d5bb58bbc95be2027d8';
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
                    const parsedData = JSON.parse(data).results[0].geometry;
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
    //use haversine formula to find the distance
    const lat1 = geoUser.lat * Math.PI / 180
    const lon1 = geoUser.lng * Math.PI / 180;

    const lat2 = geoAdmin.lat * Math.PI / 180
    const lon2 = geoAdmin.lng * Math.PI / 180;
    
    // console.log(d)
   
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

/*
 dlat = math.radians(lat2-lat1)
    dlon = math.radians(lon2-lon1)
    a = math.sin(dlat/2) * math.sin(dlat/2) + math.cos(math.radians(lat1)) \
        * math.cos(math.radians(lat2)) * math.sin(dlon/2) * math.sin(dlon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

*/



// AIzaSyDVraJIh6Q4LVKTzYPnSKmJZIvgZNo_QGQ

/*
api
https://api.opencagedata.com/geocode/v1/json?key=17be87cb887d4d5bb58bbc95be2027d8&q=kolkata&pretty=1


foward----
https://api.opencagedata.com/geocode/v1/json?q=kolkata&key=17be87cb887d4d5bb58bbc95be2027d8

backward--
https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=17be87cb887d4d5bb58bbc95be2027d8
*/