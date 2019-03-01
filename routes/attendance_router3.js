var attendance=require('../model/attendence_model')
var express=require('express');
var router=express.Router();

router.get("/:batch_id?",function(req,res,next){
    attendance.getAddAttendanceBybatchId(req.params.batch_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;