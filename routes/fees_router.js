var fees=require('../model/fees_model')
var express=require('express');
var router=express.Router();


router.get('/:fk_student_id?',function(req,res,next){
    if(req.params.fk_student_id){
        fees.getStudentfeesidByStudentid(req.params.fk_student_id,function(err,rows){
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
        fees.getStudentRemaingFees(function(err,rows)
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
    fees.addFees(req.body,function(err,rows){
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