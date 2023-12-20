const express = require("express");
const app = express()
const port = 3000;


let todo = [ ];

app.use(express.json());

app.get("/",(req,res)=>{
    //const to = req.todo;
    
    res.json({todo});
});

app.post("/",(req,res) =>{
    const newtodo = req.body.newtodo;
    if(newtodo){
        todo.push(newtodo);
        res.status(201).json({success: true, message:"TOdo added succesfully"});
    }else{
        res.status(400).json({success: false,message: "New todo not provided"});
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});