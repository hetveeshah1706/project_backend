var db=require('../dbconnection');
var standard={
  getAllStandard:function(callback){
      return db.query('select * from standard_table',callback);
  
    }
    
     
};
module.exports=standard;
