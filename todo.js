const express = require("express");
const app = express()


var todo = {};

app.get("/",(res,req)=>{
    var todo = req.query;
    
    //res.json({todo});
});

app.post("/",(res,req) =>{
    const out = req.todo;

    res.json({out});
});

app.listen(3000);