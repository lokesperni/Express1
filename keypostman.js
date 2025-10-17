var express = require("express")

var app = express()

app.use(express.json())

var myMiddleware = (req,res,next)=>{
    console.log("middleware is running");
    console.log(req.body);
    next()
    var data = new Date()
    console.log(data.toLocaleDateString());
    console.log(data.toLocaleTimeString());
}
app.use(myMiddleware) 

var system = [
    {
        id : 1,
        name : "monitor"
    },
    {
        id : 2,
        name : "cpu"
    },
    {
        id : 3,
        name : "keyboard"
    },
    {
        id : 4,
        name : "mouse"
    },
    {
        id : 5,
        name : "harddisk"
    }
]
app.get("/",(req,res)=>{
    res.send("main page")
})
app.get("/system",(req,res)=>{    
    res.json(system)
})
app.get("/system/:id",(req,res)=>{
    var systemid = parseInt(req.params.id)
    var result = system.find(item=> item.id == systemid)
    if(result){
        res.json(result)
    }else{
        res.status(401).json({message : "system id's not found"})
    }
})
app.post("/system",(req,res)=>{
    var newsystem = {
        id : system.length+1,
        name : req.body.name
    }
    system.push(newsystem)
    res.status(201).json(newsystem)    
    console.log(system);
})
app.put("/system/:id",(req,res)=>{
    var systemid = parseInt(req.params.id)
    var result = system.find(item=> item.id == systemid)
    if(result){
        result.name = req.body.name
        res.json(system)
    }else{
        res.status(401).json({message : "system data not updated"})
    }
})
app.delete("/system/:id",(req,res)=>{
    var systemid = parseInt(req.params.id)
    var result = system.find(item=> item.id == systemid)
    if(result){
        system = system.filter(item=> item.id != systemid)
        res.json(system)
    }else{
        res.status(401).json({message : "system data not deleted"})
    }
})

var port = 1947
app.listen(port,()=>{
    console.log("express running");
    
})  