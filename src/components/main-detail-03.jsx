var React = require('react');
var ReactDOM = require('react-dom');

var MainPageThirdSection = React.createClass({

  render: function() {
    return (
      <div>
        <Architect01 />
        <Architect02 />
        <Architect03 />
        <Architect04 />
      </div>
    );
  }

});

var Architect01 = React.createClass({
  render: function() {
    return (
      <div className="cd-thirdPage">
          <a href="#">
            <div className="cd-cover">
              <ArchitectDetail />
            </div>
          </a>
      </div>
    );
  }
});

var Architect02 = React.createClass({
  render: function() {
    return (
      <div className="cd-thirdPage">
          <a href="#">
            <div className="cd-cover">
              <ArchitectDetail />
            </div>
          </a>
      </div>
    );
  }
});

var Architect03 = React.createClass({
  render: function() {
    return (
      <div className="cd-thirdPage">
          <a href="#">
            <div className="cd-cover">
              <ArchitectDetail />
            </div>
          </a>
      </div>
    );
  }
});

var Architect04 = React.createClass({
  render: function() {
    return (
      <div className="cd-thirdPage">
          <a href="#">
            <div className="cd-cover">
              <ArchitectDetail />
            </div>
          </a>
      </div>
    );
  }
});

var ArchitectDetail = React.createClass({
  render: function() {
    return (
      <h2>安藤忠雄，扎哈谁是建筑师呢!</h2>
    );
  }

});

module.exports = ReactDOM.render(
  <MainPageThirdSection />,
  document.getElementById('section3')
);
