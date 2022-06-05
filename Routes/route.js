const express = require('express');
const  Model =require('../Modal/blog');

// const router = express.Router(),
 router = express.Router(),
{  signup,signin} = require("./register"),
{blog}=require("./blog")
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         Firstname: req.body.Firstname,
//         Lastname: req.body.Lastname,
//         Mobile:req.body.Mobile,
//         Email:req.body.Email,
//         Description:req.body.Description
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});
router.post("/blog", blog, function (req, res) {

});
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;