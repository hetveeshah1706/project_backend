var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var batch=require('./routes/batch_router');
var batch_standard=require('./routes/batchstd_router');
var standard=require('./routes/standard_router');
var dailyworkadd=require('./routes/dailywork_router');
var subject=require('./routes/subject_routes');
var alldaily=require('./routes/displayalldaily_router');
var dailyworkdel=require('./routes/dailyworkdel_router');
var updateDailyWorkImage=require('./routes/dailyimageupdate_router');
var notice=require('./routes/notice_router');
var multidelnotice=require('./routes/multipledelete_notice');
var node_mail=require('./routes/nodemailer_router');
var assignment=require('./routes/assignmnet_router');
var assignmentupdate=require('./routes/assupdateimage_router');
var schedule=require('./routes/schedule_router');
var schedule1=require('./routes/schedule_router1');
var faculty=require('./routes/faculty_router');
var result=require('./routes/result_router');
var attendance=require('./routes/attendance_router')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/batch',batch);
app.use('/batch_standard',batch_standard);
app.use('/standard',standard);
app.use('/dailyworkadd',dailyworkadd);
app.use('/subject',subject);
app.use('/alldaily',alldaily);
app.use('/dailyworkdel',dailyworkdel);
app.use('/updatedailyImage',updateDailyWorkImage);
app.use('/notice',notice);
app.use('/nodemail',node_mail);
app.use('/multidelnotice',multidelnotice);
app.use('/assignment',assignment);
app.use('/assignmentupdate',assignmentupdate);
app.use('/schedule',schedule);
app.use('/schedule1',schedule1);
app.use('/faculty',faculty);
app.use('/result',result);
app.use('/attendance',attendance);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
