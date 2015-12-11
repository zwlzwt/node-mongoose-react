var React = require('react');
var ReactDOM = require('react-dom');



var ScrollHeader = React.createClass({
  loadUsernameFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (name){
        this.setState({data: name});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadUsernameFromServer();
  },
  render: function () {
    return (
      <div className="scrollheader">
        <HeadLogo />
        <LoginSignin data={this.state.data} url={this.props.url} />
      </div>
    );
  }
});

var HeadLogo = React.createClass({
  render: function () {
    return (
      <span></span>
    );
  }
});

var LoginSignin = React.createClass({
  render: function (){
    if (this.props.data.length !== 0) {
      return (
        <div className="username">
          <div id="user">{this.props.data.name}</div>
          <a href="/logout" id="logout"></a>
        </div>
      );
    }
    else {
      return (
        <nav className="cd-log">
          <ul>
            <li><a href="#" id="log-in">登录</a></li>
            <li><a href="#" id="sign-in">注册</a></li>
          </ul>
        </nav>
      );
    }
  }
});

var header = $('header');
module.exports = ReactDOM.render(
    <ScrollHeader url='/api/username'/>,
    header.get(0)
);
