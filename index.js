const express = require("express");
const mongoose = require("mongoose")
const app = express();
const connectwithDB = require("./config/database")
const blog = require("./routes/blog")
require("dotenv").config();
const port = process.env.PORT||8000;

app.use(express.json());
connectwithDB();


app.get("/",(req,res)=>{
    res.send(`<h1>this is home pagesir</h1>`)
});

app.use("/api/v1",blog);




app.listen(port,()=>{
    console.log("the server is running well")
})