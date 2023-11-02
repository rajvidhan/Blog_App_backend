const Post = require("../models/postmodel");

exports.createpost = async (req,res) =>{
try{
    const {title,body} = req.body;

    const post = new  Post({
        title,body
    });
    const savepost = await post.save();

    res.json({
        post:savepost,
    })
}
catch(err){
    console.log(err)
}
}



exports.getAllposts = async (req,res)=>{
    try{
            const posts = await Post.find().populate("likes").populate("comments").exec();

            res.json({
              posts
            })
    }
    catch(err){
        console.log(err)
    }
}