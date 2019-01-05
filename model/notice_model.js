var db=require('../dbconnection');
var notice={
 getAllNotice:function(callback){
     return db.query('select * from notice_table',callback);
 },
 
 addNotice:function(item,callback){
    var today=new Date();
     return db.query('insert into notice_table (notice_date,notice_name,notice_desc,fk_standard_id,fk_batch_id) values (?,?,?,?,?) ',[today,item.notice_name,item.notice_desc,item.fk_standard_id,item.fk_batch_id],callback);
 },
 updateNotice:function(notice_id,item,callback){
    var today=new Date();
    return db.query('update notice_table set notice_date=?,notice_name=?,notice_desc=?,fk_standard_id=?,fk_batch_id=? where notice_id=?',[today,item.notice_name,item.notice_desc,item.fk_standard_id,item.fk_batch_id,notice_id],callback); 
    },
 deleteNotice:function(notice_id,callback){
     return db.query('delete from notice_table where notice_id=?',[notice_id],callback);
 },
 multipleDeleteNotice:function(item,callback)
 {
    var delarr=[];
    console.log(item);
    console.log(item.length);
    for(i=0;i<item.length;i++){
        console.log(item);
        delarr[i]=item[i].notice_id;
    }
   return db.query("delete from notice_table where notice_id in (?)",[delarr],callback);
   
},
getNoticeBatchStandard:function(callback){
    return db.query("select n.*,s.*,b.* from notice_table n,standard_table s,batch_table b where s.standard_id=n.fk_standard_id and b.batch_id=n.fk_batch_id ",callback)
},
getNoticeById:function(notice_id,callback){
    return db.query("select n.*,s.*,b.* from notice_table n,standard_table s,batch_table b where s.standard_id=n.fk_standard_id and b.batch_id=n.fk_batch_id and notice_id=? ",[notice_id],callback)
}
};
    
     

module.exports=notice;
