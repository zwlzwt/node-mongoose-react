var React = require('react');
var ReactDOM = require('react-dom');

var  Login = React.createClass({
  render: function() {
    return (
      <fieldset>
        <legend className="login-title"><h3>登录</h3></legend>
        <form method="post" className="cd-form cd-login" action="/user/log">
          <Email />
          <PassWord />
          <RememberMe />
          <SubmitButton />
          <a href="#" className="forget-password">忘记密码啦吗?</a>
        </form>
      </fieldset>
    );
  }
});

var Email = React.createClass({
  render:function () {
    return (
      <div>
        <span className="cd-icon username"></span>
        <label className="cd-label" htmlFor="cd-username">用户名</label>
        <input className="full-width has-padding has-border" type="text" id="cd-username"  name="name" autoFocus="autofocus" required></input>
      </div>
    );
  }
});

var PassWord = React.createClass({
  render: function () {
    return (
      <div>
        <span className="cd-icon password"></span>
        <label className="cd-label" htmlFor="cd-password">密码</label>
        <input className="full-width has-padding has-border" type="password" id="cd-password" name="password" required></input>
        <a href="#0" className="hide-password">Hide</a>
      </div>
    );
  }
});

var RememberMe = React.createClass({
  render:function () {
    return(
      <div>
        <input type='checkbox' id="cd-remember"></input>
        <label htmlFor="cd-remember">记得我</label>
      </div>
    );
  }
});

var SubmitButton = React.createClass({
  render:function () {
    return(
      <div>
        <input className="full-width" type="submit" value="登录"></input>
      </div>
    );
  }
});


module.exports = ReactDOM.render(
  <Login />,
  document.getElementById('full-screen-Log')
);
