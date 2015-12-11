var React = require('react');
var ReactDOM = require('react-dom');

var Menu = React.createClass({
  render: function() {
    return (
      <div>
        <MenuNavi />
        <MenuTrigger />
      </div>
    );
  }
});

var MenuNavi = React.createClass({

  render: function() {
    return (
      <ul>
        <ItemMenu url='/' name='主菜单'/>
        <ItemMenu url='/list' name='建筑'/>
        <ItemMenu url='#' name='人物'/>
        <ItemMenu url='#' name='书籍'/>
      </ul>
    );
  }
});

var MenuTrigger = React.createClass({
  render: function() {
    return (
      <a href="#" className="cd-nav-trigger"><span></span></a>
    );
  }
});

var ItemMenu = React.createClass({

  render: function() {
    return (
      <li><a href={this.props.url}>{this.props.name}</a></li>
    );
  }
});


module.exports = ReactDOM.render(
  <Menu />,
  document.getElementById('menu-nav')
);
