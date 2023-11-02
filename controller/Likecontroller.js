const Post = require("../models/postmodel");
const Like = require("../models/likemodel");


exports.likepost = async (req,res)=>{
try{

     const {post,user} = req.body;

     const like = new Like({
        post,user
     });

     const savelike = await like.save();


     // we need to udate our post collection first beause there was a array of lik we need to push or pull the lid of like in it first .

     const updatepost = await Post.findByIdAndUpdate(post,{$push:{likes:savelike._id}},{new:true}).populate("likes").exec();



     res.json({
        post:updatepost,
     })

}
catch(err){
console.log("there is some error brother")
}


}



//unlike of post 

exports.unlikepost = async (req,res)=>{
try{

const {post, like} = req.body;

//find and delete 

const deletelike = await Like.findOneAndDelete({post:post,_id:like});
//update the post collection
const updatepost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletelike._id}},{new:true});

res.json({
    post:updatepost,
})








}
catch(err){
    console.log(err);

}
}