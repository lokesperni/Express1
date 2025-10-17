var express = require("express")

var app = express()

app.set("view engine","ejs")

var array = ["Bike","Car","Plane"]
app.get("/",(req,res)=>{
    res.render("home",{arrayData:array})
})

var data = ["Name:Lokeswarrao","Study:Bsc Degree","Age:25"]
app.get("/about",(req,res)=>{
    res.render("about",{mydata:data})
})

var info = ["City:Rajahmundry","District:EastGodavari","Country:India"]
app.get("/contact",(req,res)=>{
    res.render("contact",{myinfo:info})
})

var port = 2020
app.listen(port,(req,res)=>{
    console.log("Express is running");
    
})  


