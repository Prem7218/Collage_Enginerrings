const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.use(express.static('public'));
// import listingschem from "./listeing";
// import userSchema from "./data";
const data1= require("./model/listeing");

console.log("Listing: ", data1);
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydatabase');

// const data=require("./models/data");
app.get("/", (req,res)=>{
    res.send("at main route");
    console.log(data);
});

app.get("/mindmap", (req, res) => {
    res.render("mindmap.ejs")
})

app.get("/sinup", (req,res)=>{
    res.render("singn.ejs");
});

app.get("/home", (req,res)=>{
    res.render("home.ejs");
});
app.get("/computer", (req,res)=>{
    res.render("computer.ejs")
});

app.get("/ai", (req,res)=>{
    res.render("AI.ejs");
});
app.get("/datascience", (req,res)=>{
    res.render("datascience.ejs");
});

app.get("/mechanical", (req,res)=>{
    res.render("mechanical.ejs");
});
app.get("/civil", (req,res)=>{
    res.render("civil.ejs");
});

app.get("/electrical", (req,res)=>{
    res.render("electrical.ejs");
});

app.get("/webinar", (req, res) => {
    res.render("webinar.ejs");
})

app.listen(3000,()=>{
    console.log("listen on port 3000");
});