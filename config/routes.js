var Main = require('../controllers/main.js');
var User = require('../controllers/user.js');
var Building = require('../controllers/building.js');
var Comment = require('../controllers/comment.js');
var Admin = require('../controllers/admin.js');
var Vote = require('../controllers/vote.js');

module.exports = function (app) {

  // pre handle user
  app.use(function(req, res, next) {
    var _user = req.session.user;
    app.locals.user = _user;
    next();
  });


  //Main
  app.get('/', Main.main);

  //User
  app.post('/user/sign', User.sign);
  app.post('/user/log', User.log);
  app.get('/logout', User.logout);
  app.get('/api/username', User.save);

  //Admin
  app.get('/admin/building', Admin.admin);
  app.post('/admin/building/new', Admin.new);

  //Building
  app.get('/detail/:id', Building.detail);
  app.get('/api/list', Building.save);
  app.get('/list', Building.list);

  //Comment
  app.post('/api/comment', User.signinRequired, Comment.save);

  //Vote
  app.put('/api/vote', Vote.update);
};
