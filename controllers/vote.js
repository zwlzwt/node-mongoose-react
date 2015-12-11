var mongoose = require('mongoose');
var path = require('path');
var Building = require('../data/models/building.js');
var User = require('../data/models/user.js');
var Vote = require('../data/models/vote.js');

//点赞
exports.update = function (req, res) {
  var user = req.session.user;
  console.log(user);
  if (!user) {
    res.sendStatus(401);
  }
  else {
    var userId = user._id;
    var id = req.body.id;
    Building.findById(id, function (err, building) {
      var buildingId = building.userId;
      if (buildingId.indexOf(userId) === -1) {                               //限制用户点赞次数，想法是查询userId数组中是否含有user的id
        building.userId.push(user);
        building.save(function (err, build) {
          if (err) {
            console.log(err);
          }
          console.log(build);
        });
        Building.findByIdAndUpdate(id, {$inc: {vote: 1}}, function (err, raw) {
          if(err) {
            console.log(err);
          }
          Building.findById(raw._id, function (err, doc) {
            // console.log(doc);
            res.setHeader('Cache-Control', 'no-cache');
            res.json(doc);
          });
        });
      }
      else {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(building);
        console.log(building);
      }
    });
  }
};
