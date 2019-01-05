var assignment=require('../model/assignment_model')
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/assignment')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});
    router.post('/',upload.single('image'),function(req,res,next){
    assignment.addAssignment(req.body,req.file.filename,function(err,rows){
            
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
    });
    router.put('/:assignment_id',function(req,res,next){
        assignment.updateAssignment(req.body,req.params.assignment_id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
      
    });
router.get('/:assignment_id?',function(req,res,next){
    if(req.params.assignment_id){
        assignment.getAssignById(req.params.assignment_id,function(err,rows){
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
        assignment.getBatchStandardSubjectAssign(function(err,rows)
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

router.delete('/:assignment_id',function(req,res,next){
    assignment.deleteAssignment(req.params.assignment_id,function(err,rows){
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
