var db=require("../dbconnection");
var attendance={
    getAttendanceBybatchid(batch_id,callback){
        return db.query('select s.*,b.* from student_table s,batch_table b where b.batch_id=? and s.fk_batch_id=b.batch_id ',[batch_id],callback);
    },
    getAttendanceByNameBatchStandard(callback){
        return db.query('select s.*,b.*,a.*,st.* from student_table s,batch_table b,attendance_table a,standard_table st where s.student_id=a.fk_student_id and a.fk_batch_id=b.batch_id and a.fk_standard_id=st.standard_id',callback)
    }
}
module.exports=attendance;