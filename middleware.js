function usermiddlware(req,res,next){
    if(username!="nithin" || pasword!="pass"){
        res.status(400).json({
            msg:"User not found",
        })
    }else{
        next();
    }
};
function kidneymiddleware)()