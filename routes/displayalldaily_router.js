
var allDaily=require('../model/dailywork_model')
var express=require('express');
var router=express.Router();

router.get('/:work_id?',function(req,res,next){
    if(req.params.work_id){
        allDaily.getDailyById(req.params.work_id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
        
    }
    else{
        allDaily.getBatchStandardSubjectonDailyWork(function(err,rows)
        {
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });

    }
   

});


module.exports=router;