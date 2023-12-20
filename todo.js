const express = require("express");
const app = express()
const port = 3000;


const todo = ["coding","workout","gym"];

app.get("/",(req,res)=>{
    //const to = req.todo;
    
    res.json({todo});
});

app.post("/",(req,res) =>{
    const newtodo = req.body.newtodo;
    if(newtodo){
        todo.push(newtodo);
        res.json({succes: true, todo: todo});
    }else{
        res.status(4000).json({success: false, message: "New todo is not provided"})
    }

    //res.json({out});
});

app.listen(port,()=>{
    console.log('Server is running on port ${port}');
});