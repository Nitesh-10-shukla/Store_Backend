const cloudinary = require("cloudinary");
const Banner = require("../Modal/banner");

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});


exports.upload = async(req, res) => {
    try{
    let result = await cloudinary.uploader.upload(req.body.file, 
        {
        public_id : `${Date.now()}`,
        resource_type : 'auto', 
    })
    res.json({
        public_id : result.public_id,
        url : result.secure_url,
    })
}catch(error){
    console.log(error)
}
}

exports.remove = (req, res) => {
    let image_id = req.body.public_id;
    cloudinary.uploader.destroy(image_id, (err, result) => {
        if(err) return res.json({sucess: false, err});
        res.send('Ok');
    })
}


exports.save = async(req,res) => {
    try{
        const newBanner = await new Banner(req.body).save();
        res.json(newBanner)

    }catch(error){
        console.log("Error from save banner controller", err);
    res.status(400).json({
      err: err.message,
    });
    }
    
}

exports.get = async(req,res) => {
    let images = await Banner.find({});
    res.json(images);
}


