var mongoose = require('mongoose');
var voteSchema = require('../schemas/vote.js');
var Vote =  mongoose.model('Vote', voteSchema);

module.exports = Vote;
