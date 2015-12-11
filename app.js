var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var serveStatic = require('serve-static');
var mongoStore = require('connect-mongo')(session);
var webpackserver= require('./tools/webpackdev.server.js');
var app = express();
var port = process.env.PORT || 4000;
var dbUrl = 'mongodb://localhost/zwl';

// connect
mongoose.connect(dbUrl);
// app.set('views','./src/content');

app.use(serveStatic(path.join(__dirname,'/tools/assets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'zwlzwt',
  resave: true,
  saveUninitialized: true,
  store: new mongoStore({
    url: dbUrl
  })
}));
app.use(function (err, req, res, next) {
  res.status(404).send('期待画面');
});

app.set('views', path.join(__dirname, '/src/content'));
app.set('view engine', 'ejs');


require('./config/routes.js')(app);

//报错 一般习惯把环境变量设置成NODE_ENV默认是development
var env = process.env.NODE_ENV || 'dev';
if('development' == app.get('env')) {
  app.set('showStackError', true);
  app.use(morgan(':method :url :status'));
  mongoose.set('debug', true);
}

app.listen(port,function () {
  console.log('ready on port 4000');
});
