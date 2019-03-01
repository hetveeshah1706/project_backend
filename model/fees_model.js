var db=require('../dbconnection');
var fees={
    getStudentRemaingFees:function(callback){
        
        return db.query('select student.student_name,s.total_fees,sum(sc.amount) "paid_amount",s.total_fees-sum(sc.amount) "remaining_fees",sc.* from student_table student,student_fees s,student_fees_detail sc where s.student_fees_id=sc.fk_student_fees_id and student.student_id=s.fk_student_id',callback)
},
getStudentWholeRemainingFees:function(callback){
    return db.query('select sf.*,st.student_name from student_fees sf,student_table st WHERE sf.student_fees_id NOT IN ( select fk_student_fees_id from student_fees_detail) and st.student_id=sf.fk_student_id ',callback)
},
getAllStudentFees:function(callback){
    return db.query("select s.student_name,f.total_fees,b.batch_name from student_table s,student_fees f,batch_table b where s.student_id=f.fk_student_id and b.batch_id=s.fk_batch_id",callback);
},
getStudentfeesidByStudentid:function(fk_student_id,callback){
    return db.query("select student_fees_id from student_fees where fk_student_id=?",[fk_student_id],callback);
},
addFees:function(item,callback)
{
    return db.query("insert into student_fees_detail (fk_student_fees_id,amount,mode) values (?,?,?) ",[item.fk_student_fees_id,item.amount,item.mode],callback);
},
getFeesDetail(fk_student_fees_id,callback){
    return db.query("select sf.*,f.*,s.student_name from student_fees_detail sf,student_fees f,student_table s where f.fk_student_id=s.student_id and sf.fk_student_fees_id=f.student_fees_id and sf.fk_student_fees_id=?",[fk_student_fees_id],callback)
}


}
module.exports=fees;