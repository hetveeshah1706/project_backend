var examschedulemergedata=require('../model/exam_schedule_model')
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    
        examschedulemergedata.getBatchStdSub(function(err,rows)
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
router.post("/",function(req,res,next){
    examschedulemergedata.multipleSchedule(req.body,function(err,rows){
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