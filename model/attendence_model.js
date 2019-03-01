var db=require("../dbconnection");
var today=new Date();
var attendance={
    getAttendanceBybatchid(batch_id,callback){
        return db.query('select a.*,s.student_name from attendance_table a,student_table s where a.fk_batch_id=? and a.fk_student_id=s.student_id',[batch_id],callback);
    },
    getAttendenceStatuById(date1,callback)
    {
        console.log(date1);
        var date2=new Date(date1);
        return db.query('select s.student_name from attendance_table a,student_table s where a.attendance_date=? and a.fk_student_id=s.student_id and a.attendance_status="absent"',[date2],callback);
    },
    getAttendanceByNameBatchStandard(callback)
    {
        return db.query('select s.*,b.*,a.*,st.* from student_table s,batch_table b,attendance_table a,standard_table st where s.student_id=a.fk_student_id and a.fk_batch_id=b.batch_id and a.fk_standard_id=st.standard_id',callback)
    },
    getAttendanceBybatchId(batch_id,callback){
        return db.query('select a.*,s.student_name from attendance_table a,student_table s where a.fk_batch_id=? and a.fk_student_id=s.student_id and a.attendance_status="absent"',[batch_id],callback);
    },
    getAddAttendanceBybatchId(batch_id,callback)
    {
        return db.query('select b.*,s.* from batch_table b,student_table s where b.batch_id=s.fk_batch_id and s.fk_batch_id=?',[batch_id],callback);
    },
    getAttandaneAbsent(callback){
        return db.query('select attendance_status from attendance_table where attendance_status="absent"',callback)
    },
    getAttandanePresent(callback){
        return db.query('select attendance_status from attendance_table where attendance_status="present"',callback)
    },
    getStudentByBatch(batch_id,callback){
        return db.query('select b.batch_name,s.student_name from batch_table b,student_table s where b.batch_id=s.fk_batch_id and s.fk_batch_id=?',[batch_id],callback);
    },
    getAttendanceByStudentId:function(student_id,callback){
        return db.query('select a.*,s.student_id from attendance_table a,student_table s where a.fk_student_id=s.student_id  and s.student_id=?',[student_id],callback )
    },
    
    addAttendance:function(item,callback){
        console.log(today);
         var arr=[];
         for(let i=0;i<item.length;i++){1
             arr[i]=[today,item[i].attendance_status,item[i].fk_standard_id,item[i].fk_batch_id,1,item[i].fk_student_id];
         }
         console.log(arr);
         return db.query('insert into attendance_table (attendance_date,attendance_status,fk_standard_id,fk_batch_id,fk_faculty_id,fk_student_id) values ? ',[arr],callback);
     },
     updateAttendance:function(item,callback){
        console.log(today);
     //   today.toJSON();
         var uparr=[];
         console.log(item);
         //console.log(item.student_id[0]);
         console.log(item.student_id.length);
         console.log(today.toLocaleDateString());
         for(let i=0;i<item.student_id.length;i++){
            
            //today,item[i].attendance_status,item[i].fk_standard_id,item[i].fk_batch_id,1,
            console.log("xyz"+i);
            //console.log(item[i].fk_student_id);
            uparr.push(item.student_id[i]);
         }
         //console.log(uparr);
        return db.query('update attendance_table set attendance_status="absent" where attendance_date=? and fk_student_id in (?)',[today.toLocaleDateString(),uparr],callback)
     }
    

}
module.exports=attendance;