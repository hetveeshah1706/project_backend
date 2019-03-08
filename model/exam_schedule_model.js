var db=require('../dbconnection');
var examschedule={
    getAllExamSchedule:function(callback){
        return db.query("select * from exam_schedule_table",callback);
    },
    getExamScheduleByID:function(exam_id,callback){
        return db.query("select * from exam_schedule_table where exam_id=?",[exam_id],callback);
    },
    addExamSchedule:function(item,callback){
        var exam_date=new Date(item.exam_date);
        return db.query("insert into exam_schedule_table (exam_id,fk_batch_id,fk_standard_id,fk_subject_id,exam_date,marks,hours) values (?,?,?,?,?,?,?)",[item.exam_id,item.fk_batch_id,item.fk_standard_id,item.fk_subject_id,exam_date,item.marks,item.hours],callback)
    },
    updateExamSchedule:function(item,exam_id,callback){
        var exam_date=new Date(item.exam_date);
        return db.query("update exam_schedule_table set fk_batch_id=?,fk_standard_id=?,fk_subject_id=?,exam_date=?,marks=?,hours=? where exam_id=?",[item.fk_batch_id,item.fk_standard_id,item.fk_subject_id,exam_date,item.marks,item.hours,exam_id],callback)
    },
    deleteExamSchedule:function(exam_id,callback){
        return db.query("delete from exam_schedule_table where exam_id=?",[exam_id],callback);
    },
    getBatchStdSub:function(callback){
        return db.query("select examschedule.*,batch.batch_name,standard.standard_no,subject.subject_name from exam_schedule_table examschedule,batch_table batch,standard_table standard,subject_table subject where batch.batch_id=examschedule.fk_batch_id and standard.standard_id=examschedule.fk_standard_id and subject.subject_id=examschedule.fk_subject_id",callback)
    },
    multipleSchedule:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].exam_id;
        }
       return db.query("delete from exam_schedule_table where exam_id in (?)",[delarr],callback);
       
    },
    getExamScheduleIonic:function(fk_batch_id,callback){
        return db.query("select exam_schedule.*,batch.*,subject.subject_name from exam_schedule_table exam_schedule,batch_table batch,subject_table subject where batch.batch_id=exam_schedule.fk_batch_id and subject.subject_id=exam_schedule.fk_subject_id and exam_schedule.fk_batch_id=?",[fk_batch_id],callback);
    },
    getAllBatch:function(callback){
        return db.query("select * from batch_table",callback);
    }

    
}
module.exports=examschedule