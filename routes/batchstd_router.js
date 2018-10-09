var batch_standard=require('../model/batch_model')
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    batch_standard.getBatchByStandard(function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.post("/",function(req,res,next){
    batch_standard.multipleBatch(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});



module.exports=router;
