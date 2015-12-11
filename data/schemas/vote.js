var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  voteUserId: Date,
  voteItemId: Date,
  vote: Number
});

module.exports = voteSchema;
