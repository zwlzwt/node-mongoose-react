var path = require('path');
var webpack = require('webpack');
require('jquery');


module.exports = {
  entry: {
    main: '../src/js/main.js',
    list: '../src/js/list.js',
    detail: '../src/js/detail.js',
    admin: '../src/js/admin.js'
  },
  output: {
    path: __dirname + '/assets/',
    publicPath: '/',
    filename:'[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules','bower_components']
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ],
  module: {
    loaders:[
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
         'url?limit=10000&name=img/[hash:8].[name].[ext]',
         'image-webpack?{progressive:true, progressive:true,optimizationLevel: 7, pngquant:{quality: "65-80", speed: 4}}'
        // url-loader更好用，小于10KB的图片会自动转成dataUrl，
        // 否则则调用file-loader，参数直接传入
      ]},
      {test:/\.jsx$/,loader:'babel-loader'}
    ]
  },
};
