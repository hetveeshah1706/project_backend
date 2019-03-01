var attendance=require('../model/attendence_model')
var express=require('express');
var router=express.Router();

router.get("/:date1",function(req,res,next){
    attendance.getAttendenceStatuById(req.params.date1,function(err,rows){
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

router.put('/',function(req,res,next){
    attendance.updateAttendance(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows)
        }
    });
});

router.post('/',function(req,res,next){
    attendance.addAttendance(req.body,function(err,rows){
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