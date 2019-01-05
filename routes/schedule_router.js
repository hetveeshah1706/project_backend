var schedule=require('../model/schedule_model')
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    
        schedule.getSubjectStdBatchFacultyschedule(function(err,rows)
        {
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });

    
   

});
router.post('/',function(req,res,next){
   schedule.addSchedule(req.body,function(err,rows){
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