var examresult=require('../model/examresult_model')
var express=require('express');
var router=express.Router();
router.get('/:result_id?',function(req,res,next){
    if(req.params.result_id){
        examresult.getExamResultByID(req.params.result_id,function(err,rows){
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
        examresult.getAllExamResult(function(err,rows)
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
    examresult.addExamResult(req.body,function(err,rows){
         if(err)
         {
             res.json(err)
         }
         else{
             res.json(rows)
         }
     });
   

 });
 router.put('/:result_id',function(req,res,next){
    examresult.updateExamResult(req.body,req.params.result_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.delete('/:result_id',function(req,res,next){
    examresult.deleteExamResult(req.params.result_id,function(err,rows){
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