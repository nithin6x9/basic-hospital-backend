const express = require("express");

const app = express();

const user = [{
    name:"Jhon",
    kidneys :[{
        healthy:true
    }]
}];
app.use(express.json())

app.get("/",function(req,res){
    const jhonkidneys = user[0].kidneys;
    const numberofkidney = jhonkidneys.length;
    let numberofhealthykidneys = 0;
    for (let i  = 0 ; i < jhonkidneys;i++){
        if(jhonkidneys[i].healthy){
            numberofhealthykidneys += 1;
        }
    }
    const numberofunhealthykidney = numberofkidney - numberofhealthykidneys;
    res.json({
        numberofkidney,
        numberofhealthykidneys,
        numberofunhealthykidney

    })
    console.log(jhonkidneys);


})

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    user[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for(let i= 0; i<user[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    const newkideneys = [];
    for (let i = 0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newkideneys.push[{
                healthy:true
            }]
        }
    }
    user[0].kidneys = newkideneys;
    res.json({msg:"done"})
    
})
app.listen(3000);