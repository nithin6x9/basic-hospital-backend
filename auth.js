const express = require('express');
const app = express();

app.get("/health-checkup-auth",(req,res)=>{
    const kidneyid = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;


    if(username != "tony" || password != "passtony"){
        res.status(400).json({
            msg:"User dosen't exist",
        })
        return
    }
    if(kidneyid != 1 && kidneyid != 2){
        res.status(400).json({
            msg:"Invalid iput.How the fuck you have more than 2 kidneys.are you alien motherfucker",
        })``
        return
    }
    res.json({
        msg:"Your heart is fuck'n Healthy nigga",
    })
});
app.listen(3001)