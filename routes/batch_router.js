var batch=require('../model/batch_model')
var express=require('express');
var router=express.Router();
router.get('/:batch_id?',function(req,res,next){
    if(req.params.batch_id){
        batch.getBatchById(req.params.batch_id,function(err,rows){
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
        batch.getAllBatch(function(err,rows)
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
    batch.addBatch(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.put('/:batch_id',function(req,res,next){
    batch.updateBatch(req.body,req.params.batch_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.delete('/:batch_id',function(req,res,next){
    batch.deleteBatch(req.params.batch_id,function(err,rows){
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
