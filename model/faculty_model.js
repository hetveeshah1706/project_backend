var db=require('../dbconnection');
var faculty={
    getAllFaculty(callback){
        return db.query("select * from faculty_table",callback);
    },
    getFacultyById:function(item,callback){
        return db.query("select * from faculty_table where faculty_id=? and password=?",[item.faculty_id,item.password],callback);
    
}
}
module.exports=faculty