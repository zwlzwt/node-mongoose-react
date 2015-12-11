var React = require('react');
var ReactDOM= require('react-dom');

var MainPageFirstSection= React.createClass({

  render: function() {
    return (
      <div className="first-page">
        <Building />
        <Architect />
        <Books />
      </div>
    );
  }

});


var Building = React.createClass({
  render:function() {
    return (
      <div className="cd-firstPage">
        <div className="cd-title inline"><h2>2015年11月4日</h2></div>
        <div className="cd-describe inline"><h4>这个建筑实在是没啥意思为什么呢因为不好玩</h4></div>
        <div className="cd-photo inline">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
});

var Architect = React.createClass({
  render:function() {
    return (
      <div className="cd-firstPage">
        <div className="cd-title inline"><h2>2015年11月4日</h2></div>
        <div className="cd-describe inline"><h4>这个建筑实在是没啥意思为什么呢因为不好玩</h4></div>
        <div className="cd-photo inline">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
});

var Books = React.createClass({
  render:function() {
    return (
      <div className="cd-firstPage">
        <div className="cd-title inline"><h2>2015年11月4日</h2></div>
        <div className="cd-describe inline"><h4>这个建筑实在是没啥意思为什么呢因为不好玩</h4></div>
        <div className="cd-photo inline">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
});


module.exports = ReactDOM.render(
  <MainPageFirstSection />,
  document.getElementById('section1')
);
