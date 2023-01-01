var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/app.html")
});
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/table.html")
});
app.get("/aboutus",function(req,res){
    res.send("welcome to about us page")
});
app.get("/extra",function(req,res){
    res.send("welcome to extra page")
});
app.listen(8000);
console.log("port no 8000")