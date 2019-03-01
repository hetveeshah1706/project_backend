var examresultmergedataadd=require('../model/examresult_model')
var express=require('express');
var router=express.Router();
router.get('/:fk_batch_id?',function(req,res,next){
    if(req.params.fk_batch_id){
        examresultmergedataadd.getExamResultStudentadd(req.params.fk_batch_id,function(err,rows){
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
        examresultmergedataadd.getAllStudent(function(err,rows)
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