var student=require('../model/student_model')
var express=require('express');
var router=express.Router();

router.get('/:student_id?',function(req,res,next){
    
    if(req.params.student_id){
        student.getStudentById(req.params.student_id,function(err,rows){
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

    
student.getStudent(function(err,rows){
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
    student.addStudent(req.body,function(err,rows){
         if(err)
         {
             res.json(err)
         }
         else{
             res.json(rows)
         }
     });
   
 });
 router.put('/:student_id',function(req,res,next){
    student.updateStudent(req.body,req.params.student_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});

 router.delete('/:student_id',function(req,res,next){
    student.DeleteStudent(req.params.student_id,function(err,rows){
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