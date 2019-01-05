var db=require('../dbconnection');
var faculty={
    getAllFaculty(callback){
        return db.query("select * from faculty_table",callback);
    },
}
module.exports=faculty