var path = require('path');

//首页
exports.main = function (req, res) {
  res.sendFile(path.join(__dirname,'../src/content/main.html'));
};
