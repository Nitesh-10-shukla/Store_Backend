const express = require("express");
const router = express.Router();


const { save, get ,upload,remove } = require("../Routes/Image");

router.post("/saveimage",save);
router.get("/getimages", get);
router.post("/uploadimages", upload);
router.post("/removeimage", remove);


module.exports = router;