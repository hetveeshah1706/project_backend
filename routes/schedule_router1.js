var schedule=require('../model/schedule_model')
var express=require('express');
var router=express.Router();
router.get('/:schedule_id?',function(req,res,next){
    if(req.params.schedule_id){
       schedule.getScheduleById(req.params.schedule_id,function(err,rows){
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
     schedule.getAllDate('/',function(err,rows)
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

router.post("/",function(req,res,next){
    schedule.multipleScheduleDelete(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
router.put('/:schedule_id',function(req,res,next){
    schedule.updateSchedule(req.body,req.params.schedule_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.delete('/:schedule_id',function(req,res,next){
    schedule.deleteSchedule(req.params.schedule_id,function(err,rows){
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