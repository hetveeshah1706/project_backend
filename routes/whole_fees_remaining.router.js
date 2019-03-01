var wholefees=require('../model/fees_model')
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    
        wholefees.getStudentWholeRemainingFees(function(err,rows)
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