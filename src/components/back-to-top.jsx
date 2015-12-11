var React = require('react');
var ReactDOM = require('react-dom');




var BackToTop = React.createClass({
  getInitialState:function () {
    return (
      <a href="#top" id="back-to-top"></a>
    )
  },
  handleClick:function (event) {
    var body = $('body');
    event.preventDefault();
    body.animate(
      {scrollTop:0},
      700
    );
  },
  render: function () {
    return (
      <a href="#top" id="back-to-top" onClick={this.handleClick}></a>
    );
  }
});



var footer = $('footer').get(0);
module.exports = ReactDOM.render(
    <BackToTop />,
    footer
);
