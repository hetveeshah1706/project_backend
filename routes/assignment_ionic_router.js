var assignment=require('../model/assignment_model')
var express=require('express');
var router=express.Router();

router.get('/:student_id?',function(req,res,next){
       
    assignment.getAssignmentIonic(req.params.student_id,function(err,rows){
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
    assignment.getAssignmentIonicById(req.body,function(err,rows){
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
