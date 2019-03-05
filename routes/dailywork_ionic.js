var dailyWorkIonic=require('../model/dailywork_model');
var express=require('express');
var router=express.Router();

    router.get('/:student_id?',function(req,res,next){
       
            dailyWorkIonic.getDailyWorkIonic(req.params.student_id,function(err,rows){
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
            dailyWorkIonic.getDailyworkIonicById(req.body,function(err,rows){
                console.log(req.body);
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
  