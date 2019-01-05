var db=require('../dbconnection');
var dailywork={
    addDailyWork:function(item,filename,callback){
        console.log(item);
        var today=new Date();
        return db.query("insert into dailywork_table (image,fk_standard_id,fk_subject_id,fk_batch_id,title,daily_date) values (?,?,?,?,?,?)",[filename,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,item.title,today],callback)
    },
    
    getAllDailyWork(callback){
        // date=Date.now();
        return db.query("select * from dailywork_table",callback);
    },
    updateDailyWork:function(item,work_id,callback){
        return db.query("update dailywork_table set title=?,fk_standard_id=?,fk_subject_id=?,fk_batch_id=? where work_id=?",[item.title,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,work_id],callback);
    },
    updateDailyWorkImage:function(item,filename,callback){
        return db.query("update dailywork_table set image=?,title=?,fk_standard_id=?,fk_subject_id=?,fk_batch_id=? where work_id=?",[filename,item.title,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,item.work_id],callback)
    },
    getBatchByStandardID:function(standard_id,callback){
        return db.query('select s.*,b.* from standard_table s,batch_table b where s.standard_id=? and s.standard_id=b.fk_standard_id ',[standard_id],callback);
      } ,
      getBatchStandardSubjectonDailyWork:function(callback){
          return db.query('select b.*,s.*,su.*,d.* from batch_table b,standard_table s,subject_table su,dailywork_table d  where b.batch_id=d.fk_batch_id and s.standard_id=d.fk_standard_id and su.subject_id=d.fk_subject_id',callback)
      },
      getDailyById:function(work_id,callback){
        return db.query('select b.*,s.*,su.*,d.* from batch_table b,standard_table s,subject_table su,dailywork_table d  where b.batch_id=d.fk_batch_id and s.standard_id=d.fk_standard_id and su.subject_id=d.fk_subject_id and work_id=?',[work_id],callback);
      },
      deleteDaily:function(work_id,callback){
        return db.query('delete from dailywork_table where work_id=?',[work_id],callback);
      },
      multipleDailyWork:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].work_id;
        }
       return db.query("delete from dailywork_table where work_id in (?)",[delarr],callback);
       
    }
    };


module.exports=dailywork;