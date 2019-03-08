var examScheduleIonic=require('../model/exam_schedule_model');
var express=require('express');
var router=express.Router();
router.get('/:fk_batch_id?',function(req,res,next){
    if(req.params.fk_batch_id){
        examScheduleIonic.getExamScheduleIonic(req.params.fk_batch_id,function(err,rows){
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
        examScheduleIonic.getAllBatch(function(err,rows)
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