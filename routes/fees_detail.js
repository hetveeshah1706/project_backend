var fees=require('../model/fees_model')
var express=require('express');
var router=express.Router();
router.get('/:fk_student_fees_id',function(req,res,next){
    
        fees.getFeesDetail(req.params.fk_student_fees_id,function(err,rows)
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
module.exports=router;