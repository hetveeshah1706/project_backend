var db=require('../dbconnection');
var batch={
  getAllBatch:function(callback){
      return db.query('select * from batch_table',callback);
  },
  getBatchById:function(batch_id,callback){
    return db.query('select b.*,s.* from batch_table b,standard_table s where b.batch_id=? and s.standard_id=b.fk_standard_id',[batch_id],callback);
  },
  addBatch:function(item,callback){
    return db.query('insert into batch_table (batch_name,fk_standard_id) values (?,?)',[item.batch_name,item.fk_standard_id],callback);
  },
  updateBatch:function(item,batch_id,callback){
    return db.query('update batch_table set batch_name=?,fk_standard_id=? where batch_id=?',[item.batch_name,item.fk_standard_id,batch_id],callback);
  },
  deleteBatch:function(batch_id,callback){
    return db.query('delete from batch_table where batch_id=?',[batch_id],callback);
  },
  getBatchByStandard:function(callback){
    return db.query('select s.*,b.* from standard_table s,batch_table b where s.standard_id=b.fk_standard_id ',callback);
  },
  multipleBatch:function(item,callback){
    var delarr=[];
    console.log(item);
    console.log(item.length);
    for(i=0;i<item.length;i++){
        console.log(item);
        delarr[i]=item[i].batch_id;
    }
   return db.query("delete from batch_table where batch_id in (?)",[delarr],callback);
   
}
};
module.exports=batch;