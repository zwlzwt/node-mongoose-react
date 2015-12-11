var mongoose = require('mongoose');
var User = require('../data/models/user.js');

// 注册
exports.sign = function (req, res) {
   var inputValueName = req.body;
      User.findOne({name:inputValueName.name},function (err, doc) {
      console.log(doc);
       if (err) {
         console.log(err);
       } else if (doc) {             //如果是用find找到doc.length＝＝0也可以,返回数组[] 如果是findOne返回的doc是null 特点reference
          console.log("wodecuo");     //如果a =[],b = [], a==b false; a=b=[],true;
          res.redirect('back');
        }
       else {
         var user = new User(inputValueName);
         user.save(function (err, user) {
           if(err){
             console.log(err);
           }
           else {
             var inputName = user.name;
             console.log(inputName);
             req.session.user = user;
             return res.redirect('back');
           }
        });
      }
  });
};


// 登录
exports.log = function (req, res) {
  var logValue = req.body;
  var name = logValue.name;
  var password = logValue.password;

  User.findOne({name:name},function (err,user) {
    if(err) console.log(err);
    else if (!user) {
      console.log('you have no signin!');
    }
    else {
      user.comparePassword(password,function (err, Match) {
        if(err) console.log(err);
        else if(Match) {
          req.session.user = user;
          console.log('passord is right');
          return res.redirect('back');
        }
        else {
          console.log('You have no right!');
        }
      });
    }
  });
};

//注销账户

exports.logout = function (req, res) {
  delete req.session.user;
  res.redirect('/');
};

//用户名session
exports.save = function (req, res) {
  var sessionUser = req.session.user;
  console.log(sessionUser);
  res.setHeader('Cache-Control', 'no-cache');
  res.json(sessionUser);
};

// midware for user
exports.signinRequired = function(req, res, next) {
  var user = req.session.user;
  if (!user) {
    res.redirect('back');
  }

  next();
};
