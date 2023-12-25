const express = require("express");
const app = express()

const port = 3000

function usermiddleware(req,res,next){
    if(username!="nithin" || pasword!="pass"){
        res.status(400).json({
            msg:"User not found",
        })
    }else{
        next();
    }
};
function kidneymiddleware(req,res,next){
    if(kidnyeid !=1 && kidneyid != 2){
        res.status.json({
            msg:"Kidney count invalid",
        })
    }else{
        next();
    }
};

app.use(calcaulaterequests) 
app.get("/health-checkup",usermiddleware,kidneymiddleware,(req,res)=>{
    app.send("your heart is healthy");
});

app.get("/health-checkup",(req,res)=>{
    res.send("your heart is healthy");
});

app.get("/health-checkup",usermiddleware,(req,res)=>{
    res.send("your heart is healthy");
})