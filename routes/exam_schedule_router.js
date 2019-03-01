var examschedule=require('../model/exam_schedule_model')
var express=require('express');
var router=express.Router();
router.get('/:exam_id?',function(req,res,next){
    if(req.params.exam_id){
        examschedule.getExamScheduleByID(req.params.exam_id,function(err,rows){
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
        examschedule.getAllExamSchedule(function(err,rows)
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
router.post('/',function(req,res,next){
    examschedule.addExamSchedule(req.body,function(err,rows){
         if(err)
         {
             res.json(err)
         }
         else{
             res.json(rows)
         }
     });
   

 });
 router.put('/:exam_id',function(req,res,next){
    examschedule.updateExamSchedule(req.body,req.params.exam_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.delete('/:exam_id',function(req,res,next){
    examschedule.deleteExamSchedule(req.params.exam_id,function(err,rows){
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