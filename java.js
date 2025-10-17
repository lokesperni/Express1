var express = require("express")

var app = express()

app.use(express.json())

var data = [
    {
        id : 1,
        name : "lokes"
    },
    {
        id : 2,
        name : "sai"
    },
    {
        id : 3,
        name : "pawan"
    },
    {
        id : 4,
        name : "selva"
    },
    {
        id : 5,
        name : "raja"
    }
]
app.get("/",(req,res)=>{
    res.send("mainpage")
})
app.get("/data",(req,res)=>{
    res.json(data)
})
app.get("/data/:id",(req,res)=>{
    var mydataid = parseInt(req.params.id)
    var result = data.find(profile=> profile.id == mydataid)
    res.json(result)
})
app.post("/data",(req,res)=>{
    var newdata = {
        id : data.length+1,
        name : req.body.name
    }
    data.push(newdata)
    res.status(201).json(newdata)
})
app.put("/data/:id",(req,res)=>{
    var mydataid = parseInt(req.params.id)
    var result = data.find(profile=> profile.id == mydataid)
    if(result){
        result.name = req.body.name
        res.json(result)
    }else{
        res.status(401).json({message:"data cannot be update"})
    }
})
app.delete("/data/:id",(req,res)=>{
    var mydataid = parseInt(req.params.id)
    var result = data.find(profile=> profile.id == mydataid)
    if(result){
        data = data.filter(profile=> profile.id != mydataid)
        res.json(data)
    }else{
        res.status(401).json({message:"data cannot be delete"})
    }
})

var port = 4444
app.listen(port,()=>{
    console.log("server is running");
    
})    



var express = require("express")

var app = express()

app.use(express.json())

var fruit = [
    {
        id : 1,
        name : "mango"
    },
    {
        id : 2,
        name : "apple"
    },
    {
        id : 3,
        name : "pineapple"
    },
    {
        id : 4,
        name : "banna"
    },
    {
        id : 5,
        name : "orange"
    }
]
app.get("/",(req,res)=>{
    res.send("main page")
})
app.get("/fruit",(req,res)=>{
    res.json(fruit)
})
app.get("/fruit/:id",(req,res)=>{
    var myfruitid = parseInt(req.params.id)
    var result = fruit.find(item=> item.id == myfruitid)
    res.json(result)
})
app.post("/fruit",(req,res)=>{
    var newfruit = {
        id : fruit.length+1,
        name : req.body.name
    }
    fruit.push(newfruit)
    res.status(201).json(newfruit)
})
app.put("/fruit/:id",(req,res)=>{
    var myfruitid = parseInt(req.params.id)
    var result = fruit.find(item=> item.id == myfruitid)
    if(result){
        result.name = req.body.name
        res.json(fruit)
    }else{
        res.status(401).json({message : "item not found"})
    }
})
app.delete("/fruit/:id",(req,res)=>{
    var myfruitid = parseInt(req.params.id)
    var result = fruit.find(item=> item.id == myfruitid)
    if(result){
        fruit = fruit.filter(item=> item.id != myfruitid)
        res.json(fruit)
    }else{
        res.status(401).json({message : "item not delete"})
    }
})
var port = 1234
app.listen(port,()=>{
    console.log("server runs");
    
}) 
