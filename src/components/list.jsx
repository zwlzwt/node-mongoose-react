var React = require('react');
var ReactDOM = require('react-dom');
var img = require('../public/thumb-4.jpg');
var img01 = require('../public/thumb-2.jpg');
var img02 = require('../public/thumb-1.jpg');


var ListContent = React.createClass({
  loadContentFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadContentFromServer();
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    var titleNode = this.state.data.map(function (building, index) {
      return (
        <TodoList title={building.title} key={index} id={building._id}/>
      );
    });
    return (
      <ul id="cd-gallery-items" className="cd-container">
        {titleNode}
      </ul>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <li>
        <ul className="cd-item-wrapper">
          <li className="cd-item-front"><a href="#0"><img src={img}></img></a></li>
          <li className="cd-item-middle"><a href="#0"><img src={img01}></img></a></li>
          <li className="cd-item-back"><a href="#0"><img src={img02}></img></a></li>
        </ul>
        <VoteDescribe title={this.props.title} id={this.props.id}/>
        <Navi />
      </li>
    );
  }
});

var VoteDescribe = React.createClass({
  getInitialState: function () {
    return ({text: 0});
  },
  handleVote: function (e) {
    e.preventDefault();
    this.upVoteToServer();
  },
  upVoteToServer: function () {
    var vote = this.state.text;
    var id = this.props.id;
    $.ajax({
      url: '/api/vote',
      data: {
        voteAll: vote,
        itemId: id
      },
      type: 'PUT',
      dataType: 'text',
      success: function (data) {
        this.setState({text: data.vote});
      }.bind(this)
    });
  },
  render: function() {
    var url = '/detail/' + this.props.id;
    return (
      <div className="cd-item-info">
        <b><a href={url}>{this.props.title}</a></b>
        <em><a href="#" onClick={this.handleVote} ref="vote">{this.state.text}</a></em>
      </div>
    );
  }
});

var Navi = React.createClass({
  render: function() {
    return (
      <nav>
        <ul className="cd-item-navigation">
          <li><a className="cd-img-replace" href="#">Prev</a></li>
          <li><a className="cd-img-replace" href="#">Next</a></li>
        </ul>
      </nav>
    );
  }
});

var main = $('main');
module.exports = ReactDOM.render(
      <ListContent url="/api/list"/>,
      main.get(0)
);
