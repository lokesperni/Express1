// var express = require("express")

// var products = [
//     {
//         id : 1,
//         name : "Lokes"
//     },
//     {
//         id : 2,
//         name : "Chandu"
//     },
//     {
//         id : 3,
//         name : "Pawan"
//     }
// ]
// var app = express()
// app.get("/",(req,res)=>{
//     res.send("this is main page")    
// })
// app.get("/products",(req,res)=>{
//     res.json(products)
// })
// app.get("/products/:id",(req,res)=>{
//     var myproductid = parseInt(req.params.id)
//     var myproduct = products.find(item=>item.id == myproductid)
//     if(myproduct){
//         res.json(myproduct)     
//     }else{
//         res.status(404).json({message : "invalid product"})        
//     }
// })
// var port = 2000
// app.listen(port,()=>{
//     console.log("server runs");
    
// }) 

// var express = require("express")

// var app = express()

// app.use(express.json())

// var myMiddleware = (req,res,next)=>{
//     console.log("middleware is running");
//     next()
//     var data = new Date()
//     console.log(data.toLocaleDateString());
//     console.log(data.toLocaleTimeString());
// }
// app.use(myMiddleware) 
// var cards = [
//     {
//         id : 1,
//         card : "heart"
//     },
//     {
//         id : 2,
//         card : "joker"
//     },
//     {
//         id : 3,
//         card : "diamond"
//     },
//     {
//         id : 4,
//         card : "ace"
//     }
// ]

// app.get("/",(req,res)=>{
//     res.send("main page")
// })

// app.get("/cards",(req,res)=>{
//     res.json(cards)
// })
// app.get("/cards/:id",(req,res)=>{
//     var cardsid = req.params.id-0
//     var result = cards.find(item=> item.id == cardsid)
//     if(result){
//         res.json(result)
//     }else{
//         res.status(404).json({message : " there is no cards"})
//     }
// })
// app.post("/cards",(req,res)=>{
//     var newcards = {
//         id : cards.length+1,
//         name : req.body.name
//     }
//     cards.push(newcards)
//     res.status(201).json(newcards)
//     console.log(cards);
    
// })
// var port = 1947
// app.listen(port,(req,res)=>{
//     console.log("express is running");
    
// })  


