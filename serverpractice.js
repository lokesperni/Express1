const { name } = require("ejs")
var express = require("express")

var app = express()

app.use(express.json())

var myMiddleware = (req,res,next)=>{
    console.log("middleware is running");
    console.log(req.body);
    var data = new Date()
    console.log(data.toLocaleDateString());
    console.log(data.toLocaleTimeString());
    next()

}
app.use(myMiddleware) 

var school = [
    {
        id : 1,
        name : "mahesh"
    },
    {
        id : 2,
        name : "charan"
    },
    {
        id : 3,
        name : "tarak"
    },
    {
        id : 4,
        name : "kalyan"
    },
    {
        id : 5,
        name : "prabhas"
    },
    {
        id : 6,
        name : "arjun"
    }
]
app.get("/",(req,res)=>{
    res.send("mainpage")
})
app.get("/school",(req,res)=>{
    res.json(school)
})
app.get("/school/:id",(req,res)=>{
    var schoolid = parseInt(req.params.id)
    var result = school.find(item=> item.id == schoolid)
    if(result){
        res.json(result)
    }else{
        res.status(401).json({message : "school id not found"})
    }
})
app.post("/school",(req,res)=>{
    var newschool = {
        id : school.length+1,
        name : req.body.name
    }
    school.push(newschool)
    res.status(201).json(newschool)
    console.log(school);
    
})
app.put("/school/:id",(req,res)=>{
    var schoolid = parseInt(req.params.id)
    var result = school.find(item=> item.id == schoolid)
    if(result){
        result.name = req.body.name
        res.json(school)
    }else{
        res.status(401).json({message : "school data not updated"})
    }
})
app.delete("/school/:id",(req,res)=>{
    var schoolid = parseInt(req.params.id)
    var result = school.find(item=> item.id == schoolid)
    if(result){
        school = school.filter(item=> item.id != schoolid)
        res.json(school)
    }else{
        res.status(401).json({message : "school data not deleted"})
    }
})
var port = 9898
app.listen(port,()=>{
    console.log("express is running");
    
}) 