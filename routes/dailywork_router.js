var dailyWorkAdd=require('../model/dailywork_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/dailywork')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});
    router.post('/',upload.single('image'),function(req,res,next){
        dailyWorkAdd.addDailyWork(req.body,req.file.filename,function(err,rows){
            
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
    });
    router.get('/:standard_id?',function(req,res,next){
       
            dailyWorkAdd.getBatchByStandardID(req.params.standard_id,function(err,rows){
                if(err)
                {
                    res.json(err)
                }
                else{
                    res.json(rows)
                }
            });
        });
    
            
        
    
router.put('/:work_id',upload.single('image'),function(req,res,next){
    dailyWorkAdd.updateDailyWork(req.body,req.params.work_id,req.file.filename,function(err,rows){
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
  