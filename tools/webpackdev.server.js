var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var url = require('url');
var proxy = require('proxy-middleware');

module.exports = function (app) {
  app.use('/assets',proxy(url.parse('http://localhost:8080/assets')));

  var server = new WebpackDevServer(webpack(config), {
   contentBase: __dirname,
   hot: true,
   quiet: false,
   noInfo: false,
   publicPath: '/assets/',
   stats: { colors: true }
 }).listen(8081, 'localhost', function() {
   console.log('socketio listen 8080');
 });
};
