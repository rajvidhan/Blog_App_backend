const mongoose = require("mongoose");
require("dotenv").config();

const connectwithDB = ()=>{
    
mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
   console.log("the mongodb is connected")
})
.catch((err)=>{
   console.log(err)
});

}


module.exports = connectwithDB;