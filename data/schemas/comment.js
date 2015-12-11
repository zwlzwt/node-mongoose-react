var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CommentSchema = new Schema({
  building: {
    type: ObjectId, ref: 'Building'
  },
  from: {
    type: ObjectId, ref: 'User'
  },
  replay: [{
    from:{type: ObjectId, ref: 'User'},
    to: {type: ObjectId, ref: 'User'},
    content: String,
  }],
  content: String,
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

CommentSchema.pre('save', function (next) {
  if(this.isNew) {
    this.meta.createAt = this.meta.updataAt = Date.now();
  }
  else {
    this.meta.updataAt = Date.now();
  }
  next();
});


CommentSchema.statics = {
  fetch: function(cb) {
    return this
          .find()
          .sort('meta.updataAt')
          .exec(cb);
  }
};

module.exports = CommentSchema;
