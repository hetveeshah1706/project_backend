var nodemailer=require('nodemailer');
var demo={
    sendMail:function(demo,callback){
        var transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'vidhipshah10@gmail.com',
                pass:"vidhi@123"
            }
        });
        var mailOptions={
            from:'vidhipshah10@gmail.com',
            to:demo.to,
            subject:demo.subject,
            text:demo.message
        };
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log('email sent'+info.response);
            }
        });
        
    }
}
module.exports=demo;