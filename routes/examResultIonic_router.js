var examResultIonic=require('../model/examresult_model');
var express=require('express');
var router=express.Router();
router.get('/:fk_student_id?',function(req,res,next){
    
        examResultIonic.getExamResultIonic(req.params.fk_student_id,function(err,rows){
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