var db=require('../dbconnection');
var examresult={
    getAllExamResult:function(callback){
        return db.query("select * from exam_table",callback);
    },
    getExamResultByID:function(result_id,callback){
        return db.query("select examschedule.*,examresult.*,student.*,subject.subject_name from exam_schedule_table examschedule,exam_table examresult,student_table student,subject_table subject where examschedule.exam_id=examresult.fk_exam_id and student.student_id=examresult.fk_student_id and  subject.subject_id=examschedule.fk_subject_id and examresult.result_id=?",[result_id],callback) 
    },
    addExamResult:function(item,callback){
        return db.query("insert into exam_table (result_id,marks_obtained,fk_exam_id,fk_student_id) values (?,?,?,?)",[item.result_id,item.marks_obtained,item.fk_exam_id,item.fk_student_id],callback)
    },
    updateExamResult:function(item,result_id,callback){
        return db.query("update exam_table set marks_obtained=?,fk_exam_id=?,fk_student_id=? where result_id=?",[item.marks_obtained,item.fk_exam_id,item.fk_student_id,result_id],callback)
    },
    deleteExamResult:function(result_id,callback){
        return db.query("delete from exam_table where result_id=?",[result_id],callback);
    },
    getExamResultStudent:function(callback){
        return db.query("select examschedule.*,examresult.*,student.student_name,batch.batch_name,standard.standard_no,subject.subject_name from exam_schedule_table examschedule,exam_table examresult,student_table student,batch_table batch,standard_table standard,subject_table subject where examschedule.exam_id=examresult.fk_exam_id and student.student_id=examresult.fk_student_id and batch.batch_id=examschedule.fk_batch_id and standard.standard_id=examschedule.fk_standard_id and subject.subject_id=examschedule.fk_subject_id",callback)
    },
    getExamResultStudentadd:function(fk_batch_id,callback){
        return db.query("select e.*,s.* from exam_schedule_table e,subject_table s where e.fk_batch_id=? and e.fk_subject_id=s.subject_id",[fk_batch_id],callback);
    },
    getAllStudent:function(callback){
        return db.query("select * from student_table",callback);
    }
    
}
module.exports=examresult