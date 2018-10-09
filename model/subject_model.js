var db=require('../dbconnection');
var subject={
    getAllSubject:function(callback){
        
        return db.query("select * from subject_table",callback)
}
}
module.exports=subject;