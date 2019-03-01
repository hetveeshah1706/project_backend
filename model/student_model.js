var db=require('../dbconnection');
var student={
    getStudent:function(callback){
        return db.query("select st.*,b.batch_name,s.standard_no,ss.* from student_table st,batch_table b,standard_table s,student_adopt_subject ss where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id and ss.subject_id=st.fk_subject_id",callback);
    },
    getStudentByLoginId:function(item,callback){
        return db.query("select * from student_table where student_id=? and student_password=?",[item.student_id,item.student_password],callback);
    
},
    addStudent:function(item,callback){
        var join_date=new Date(item.joining_date);
        var dob=new Date(item.date_of_birth);
        return db.query("insert into student_table (student_name,student_password,joining_date,date_of_birth,fk_standard_id,fk_batch_id,maths,science,english,physics,biology) values (?,?,?,?,?,?,?,?,?,?,?) ",[item.student_name,item.student_password,join_date,dob,item.fk_standard_id,item.fk_batch_id,item.maths,item.science,item.english,item.physics,item.biology],callback);
    },
    DeleteStudent(student_id,callback){
        return db.query('delete from student_table where student_id=?',[student_id],callback);
    },
    multipleStudentDelete:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].student_id;
        }
       return db.query("delete from student_table where student_id in (?)",[delarr],callback);
       
    },
    getStudentById:function(student_id,callback){
        return db.query("select st.*,b.batch_name,s.standard_no from student_table st,batch_table b,standard_table s where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id and student_id=?",[student_id],callback);
    },
    updateStudent:function(item,student_id,callback){
        var join_date=new Date(item.joining_date);
        var dob=new Date(item.date_of_birth);
        return db.query("update student_table set student_name=?,student_password=?,joining_date=?,date_of_birth=?,fk_standard_id=?,fk_batch_id=?,maths=?,science=?,english=?,physics=?,biology=? where student_id=?",[item.student_name,item.student_password,join_date,dob,item.fk_standard_id,item.fk_batch_id,item.maths,item.science,item.english,item.physics,item.biology,student_id],callback);
    },

    getStudentFront:function(student_id,callback){
        return db.query("select st.*,b.batch_name,s.standard_no,ss.* from student_table st,batch_table b,standard_table s,student_adopt_subject ss where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id and ss.subject_id=st.fk_subject_id and st.student_id=?",[student_id],callback);
    }
  
};
module.exports=student;
