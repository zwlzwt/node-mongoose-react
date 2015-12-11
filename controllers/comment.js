var mongoose = require('mongoose');
var Comment = require('../data/models/comment.js');





//评论
exports.save = function (req, res) {
  var upComment = req.body.comment;
  console.log(upComment);
  var buildingId = upComment.building;

  if (upComment.cid) {
    Comment.findById(upComment.cid, function (err, comment) {
      console.log(comment);
      var replay = {
        from: upComment.from,
        to: upComment.tid,
        content: upComment.content
      }

      comment.replay.push(replay);

      comment.save(function (err, comment) {
        if (err) {
          console.log(err);
        }

        res.redirect('/detail/' + buildingId);
      });
    });
  }
  else {
    var newComment = new Comment(upComment);
    newComment.save(function (err, comment) {
      if (err) {
        console.log(err);
      }
      res.redirect('/detail/' + buildingId);
    });
  }
};
