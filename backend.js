const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors())

app.get("/interest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.rate);

    const inter = principal * rate * time/100;
    const total = principal + inter;

    res.json({
        Total: total,
        Intrest: inter
    });
});
app.listen(3006);