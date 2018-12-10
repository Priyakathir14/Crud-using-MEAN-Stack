var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');


var mongoose = require('mongoose');
mongoose.connect('mongodb://priya:priya@cluster0-shard-00-00-9u0te.mongodb.net:27017,cluster0-shard-00-01-9u0te.mongodb.net:27017,cluster0-shard-00-02-9u0te.mongodb.net:27017/user1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    function(err){
        if(err){
            console.log(err);
        }else{
            console.log('DB connected');
        }
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mobile = require('./models/mobile.model');
var product = require('./routes/mobile.routes');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product',product);

app.use(cors());
app.use(bodyParser.json());

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
