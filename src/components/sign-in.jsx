var React = require('react');
var ReactDOM = require('react-dom');

var Signin = React.createClass({

  render: function() {
    return (
      <fieldset>
        <legend className="signin-title"><h3>注册</h3></legend>
        <form method="post" className="cd-form cd-signin" action='/user/sign'>
          <UserName />
          <Email />
          <PassWord />
          <ConfigPassWord />
          <Argeement />
          <SubmitButton />
        </form>
      </fieldset>
    );
  }
});

var UserName = React.createClass({
  render:function () {
    return (
      <div>
        <span className="cd-icon username"></span>
        <label className="cd-label" htmlFor="cd-username">用户名</label>
        <input className="full-width has-padding has-border" type="text"  id="cd-username" autoFocus="autofocus" name="name" required></input>
      </div>
    );
  }
});




var Email = React.createClass({
  render:function () {
    return (
      <div>
        <span className="cd-icon email"></span>
        <label className="cd-label" htmlFor="cd-email">邮件</label>
        <input className="full-width has-padding has-border" type="email" id="cd-email" autoFocus="autofocus" name="email" required></input>
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
        <span className="err-warning password"></span>
        <a className="hide-password">Hide</a>
      </div>
    );
  }
});

var ConfigPassWord = React.createClass({
  render: function () {
    return (
      <div>
        <span className="cd-icon password"></span>
        <label className="cd-label" htmlFor="cd-repassword">请在输入一遍</label>
        <input className="full-width has-padding has-border" type="password" id="cd-repassword" name="re-password" required></input>
        <span className="err-warning repassword"></span>
        <a className="hide-password">Hide</a>
      </div>
    );
  }
});

var Argeement = React.createClass({
  render:function () {
    return(
      <div>
        <input type="checkbox" id="cd-terms"></input>
        <label htmlFor="cd-terms">我同意</label>
        <a href="#0">Terms</a>
      </div>
    );
  }
});

var SubmitButton = React.createClass({
  render:function () {
    return(
      <div>
        <input className="full-width" type="submit" value="注册" id="regist-btn"></input>
      </div>
    );
  }
});

module.exports = ReactDOM.render(
  <Signin />,
  document.getElementById('full-screen-sign')
);
