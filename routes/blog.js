const express = require("express");
const router = express.Router();

// import controller
const {likepost,unlikepost}  = require("../controller/Likecontroller")

const {createcomment } = require("../controller/commentcontroller")
const {createpost,getAllposts} = require("../controller/postController")
// maping create 


router.post("/comment/create",createcomment);
router.post("/post/create",createpost);
router.get("/posts",getAllposts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikepost);





// export 
module.exports = router;