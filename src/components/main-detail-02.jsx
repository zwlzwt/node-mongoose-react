var React = require('react');
var ReactDOM= require('react-dom');

var MainPageSecondSection= React.createClass({

  render: function() {
    return (
      <div className="second-page">
        <Build01 />
        <Build02 />
        <Build03 />
        <Build04 />
        <BuildVeiwAll />
      </div>
    );
  }

});

var Build01 = React.createClass({
  render:function() {
    return (
      <div className="cd-secondPage">
        <div className="cd-pic">
          <a href="#">
            <div className="cd-deta">
              <BuildDetail />
            </div>
          </a>
        </div>
      </div>
    );
  }
});

var Build02 = React.createClass({
  render:function() {
    return (
      <div className="cd-secondPage">
        <div className="cd-pic">
          <a href="#">
            <div className="cd-deta">
              <BuildDetail />
            </div>
          </a>
        </div>
      </div>
    );
  }
});

var Build03 = React.createClass({
  render:function() {
    return (
      <div className="cd-secondPage">
        <div className="cd-pic">
          <a href="#">
            <div className="cd-deta">
              <BuildDetail />
            </div>
          </a>
        </div>
      </div>
    );
  }
});

var Build04 = React.createClass({
  render:function() {
    return (
      <div className="cd-secondPage">
        <div className="cd-pic">
          <a href="#">
            <div className="cd-deta">
              <BuildDetail />
            </div>
          </a>
        </div>
      </div>
    );
  }
});

var BuildVeiwAll = React.createClass({
  render:function() {
    return (
      <a href="/list" className="cd-viewAll">查看全部</a>
    );
  }
});

var BuildDetail = React.createClass({
  render:function() {
    return (
      <h2>这个建筑的详细信息</h2>
    );
  }
});

module.exports = ReactDOM.render(
  <MainPageSecondSection />,
  document.getElementById('section2')
);
