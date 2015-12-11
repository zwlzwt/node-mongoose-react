var mongoose = require('mongoose');
var BuildingSchema = require('../schemas/building.js');
var Building = mongoose.model('Building', BuildingSchema);

module.exports = Building;
