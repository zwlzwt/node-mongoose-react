var mongoose = require('mongoose');
var path = require('path');
var Building = require('../data/models/building.js');
var Comment = require('../data/models/comment.js');

//后台录入信息进入列表页react ajax请求
exports.save = function (req, res) {
  Building.fetch(function (err, data) {
    if (err) {
      console.log(err);
    }
    var AdminTolist = data;
    // console.log(AdminTolist);
    res.setHeader('Cache-Control', 'no-cache');
    res.json(AdminTolist);
  });
};

//详情页
exports.detail = function (req, res) {
  var id = req.params.id;
  Building.findById(id, function (err, build) {
    Comment
      .find({building: id})
      .populate('from', 'name')
      .populate('replay.from replay.to', 'name')
      .exec(function (err, comments) {
      console.log(comments);
      res.render('detail',{
        title: build.title,
        describe: build.describe,
        build: build,
        comments: comments
      });
    });
  });
};

//列表页
exports.list = function (req, res) {
  Building.fetch(function (err, data) {
    if (err) {
      console.log(err);
    }
    // console.log(data);
    res.render('list', {
      data: data
    });
  });
};
