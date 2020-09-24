var express= require("express");
var fs = require("fs");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
var port = process.env.PORT || 3002;
var jsonparser = bodyparser.json();
var urlencoded = bodyparser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname,"/public")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/public/home.html"))
})


app.listen(port)