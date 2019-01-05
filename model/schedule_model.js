var db=require('../dbconnection');
var schedule={
    getAllSchedule(callback){

        return db.query("select * from schedule_table",callback);
    },
    getAllDate(callback)
    {
        return db.query("select * from schedule_table",callback);
    },
    getSubjectStdBatchFacultyschedule(callback){
        return db.query('select b.*,s.*,su.*,sc.*,f.* from batch_table b,standard_table s,subject_table su,schedule_table sc,faculty_table f where b.batch_id=sc.fk_batch_id and s.standard_id=sc.fk_standard_id and su.subject_id=sc.fk_subject_id and f.faculty_id=sc.fk_faculty_id',callback)
    
    },
    addSchedule:function(item,callback){
        //var today=new Date();
         return db.query('insert into schedule_table (schedule_date,timings,fk_subject_id,fk_standard_id,fk_batch_id,fk_faculty_id) values (?,?,?,?,?,?) ',[item.schedule_date,item.timings,item.fk_subject_id,item.fk_standard_id,item.fk_batch_id,item.fk_faculty_id],callback);
     },
}
module.exports=schedule