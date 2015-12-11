var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var BuildingSchema = new Schema({
  title: String,
  describe: String,
  vote: {
    type: Number,
    default: 0
  },
  userId: [{
      type: ObjectId,
      ref:'User'
  }],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updataAt: {
      type: Date,
      default: Date.now()
    }
  }
});

BuildingSchema.pre('save', function (next) {
  if(this.isNew) {
    this.meta.createAt = this.meta.updataAt = Date.now();
  }
  else {
    this.meta.updataAt = Date.now();
  }
  next();
});


BuildingSchema.statics = {
  fetch: function(cb) {
    return this
          .find()
          .sort({'meta.updataAt': 'desc'})
          .exec(cb);
  }
};

module.exports = BuildingSchema;
