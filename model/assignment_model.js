var db=require('../dbconnection');
var assignment={
    getAllAssignment(callback){
        return db.query("select * from assignment_table",callback);
    },
    getAssignById:function(assignment_id,callback){
        return db.query('select b.*,s.*,su.*,a.* from batch_table b,standard_table s,subject_table su,assignment_table a  where b.batch_id=a.fk_batch_id and s.standard_id=a.fk_standard_id and su.subject_id=a.fk_subject_id and a.assignment_id=?',[assignment_id],callback);
      },
      getBatchStandardSubjectAssign:function(callback){
        return db.query('select b.*,s.*,su.*,a.* from batch_table b,standard_table s,subject_table su,assignment_table a  where b.batch_id=a.fk_batch_id and s.standard_id=a.fk_standard_id and su.subject_id=a.fk_subject_id',callback)
    },
    addAssignment:function(item,filename,callback){
        console.log(item);
        var today=new Date();
        return db.query("insert into assignment_table (image,fk_standard_id,fk_subject_id,fk_batch_id,title,submisson_date) values (?,?,?,?,?,?)",[filename,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,item.title,today],callback)
    },
    updateAssignment:function(item,assignment_id,callback){
        return db.query("update assignment_table set title=?,fk_standard_id=?,fk_subject_id=?,fk_batch_id=? where assignment_id=?",[item.title,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,assignment_id],callback);
    },
    updateAssignmentImage:function(item,filename,callback){
        return db.query("update assignment_table set image=?,title=?,fk_standard_id=?,fk_subject_id=?,fk_batch_id=? where assignment_id=?",[filename,item.title,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,item.assignment_id],callback)
    },
    deleteAssignment:function(assignment_id,callback){
        return db.query('delete from assignment_table where assignment_id=?',[assignment_id],callback);
      },
      multipleAssignment:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].assignment_id;
        }
       return db.query("delete from assignment_table where assignment_id in (?)",[delarr],callback);
       
    }
}
module.exports=assignment;
