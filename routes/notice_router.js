var notice=require('../model/notice_model')
var express=require('express');
var router=express.Router();
router.get('/:notice_id?',function(req,res,next){
    
        if(req.params.notice_id){
            notice.getNoticeById(req.params.notice_id,function(err,rows){
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

        
    notice.getAllNotice(function(err,rows){
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
    notice.addNotice(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.put('/:notice_id',function(req,res,next){
    notice.updateNotice(req.params.notice_id,req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});
router.delete('/:notice_id',function(req,res,next){
    notice.deleteNotice(req.params.notice_id,function(err,rows){
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
