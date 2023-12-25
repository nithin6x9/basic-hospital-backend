const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors())

app.get("/interest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.rate);

    const interes = (principal * rate * time)/100;
    const total = principal + interes;

    res.json({
        Total: total,
        Intrest: interes
    });
});
app.listen(3006);