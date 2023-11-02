const Comment = require("../models/commentmodel");
const Post = require("../models/postmodel")
const mongoose = require("mongoose")

exports.createcomment = async (req,res)=>{

try{
//featch data from req.body

const {post,user,body}= req.body;

// create a comment object 

const comment = new Comment({
    post,
    user,
    body
});

// save the object into the database 

const savedcomment = await comment.save();


//find the post and new comment is updte from the post comment array

const updatepost  = await Post.findByIdAndUpdate(post,{$push:{comments:savedcomment._id}},{new:true})
.populate("comments")//populate the comment array with comment documents 
.exec();


res.json({
    post:updatepost,
})




}
catch(err){
   res.send(err)
}



}


