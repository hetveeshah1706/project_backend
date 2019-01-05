var db=require('../dbconnection');
var result={
 getAllResult:function(callback){
     return db.query('select * from result_table',callback);
 }
};

    
     

module.exports=result;
