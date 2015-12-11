var mongoose = require('mongoose');
var path = require('path');
var Building = require('../data/models/building.js');


//后台录入页
exports.admin = function (req, res) {
  res.sendFile(path.join(__dirname,'../src/content/admin.html'));
};

//录入页数据存储
exports.new = function (req, res) {
  var buildingObj = req.body;
  var newBuild = new Building({
    title: buildingObj.title,
    describe: buildingObj.describe
  });
  newBuild.save(function (err, build) {
    if(err) {
        console.log(err);
      }
      console.log(build);
      res.redirect('/list');
    }
  );
};
