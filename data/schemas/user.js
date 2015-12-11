var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var saltWorkFactor = 10;



var userSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true
  },
  email:String,
  password:String
});

// 加盐hash加密
userSchema.pre('save',function (next) {
  var user = this;
    bcrypt.genSalt(saltWorkFactor,function (err,salt) {
      if(err) return (err);
        bcrypt.hash(user.password,salt,function (err,hash) {
          if (err) return (err);
          user.password = hash;
          next();  //小心此处的next(),必须添加
        });
    });
});

userSchema.method({
  comparePassword: function (password, cb) {
    bcrypt.compare(password, this.password, function (err, Match) {
      if(err) console.log(err);
      cb(null, Match);
    });
  }
});


module.exports = userSchema;
