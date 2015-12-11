var React = require('react');
var ReactDOM = require('react-dom');

var AdminPost = React.createClass({

  render: function() {
    return (
      <form action="/admin/building/new" method="post">
        <AdminControl />
        <AdminTitle />
        <AdminDescribe />
        <AdminSubmit />
      </form>
    );
  }
});

var AdminControl = React.createClass({

  render: function() {
    return (
      <input type="hidden" name={this.props.id} value={this.props.id}></input>
    );
  }
});

var AdminTitle = React.createClass({

  render: function() {
    return (
      <div>
        <label htmlFor="cd-title">标题</label>
        <input type="text" name="title" id="cd-title"></input>
      </div>
    );
  }
});

var AdminDescribe = React.createClass({

  render: function() {
    return (
      <div>
        <label htmlFor="cd-describe">描述</label>
        <textarea name="describe" id="cd-describe"></textarea>
      </div>
    );
  }
});

var AdminSubmit = React.createClass({

  render: function() {
    return (
      <div>
        <input type="submit"></input>
      </div>
    );
  }
});


module.exports = ReactDOM.render(
  <AdminPost />,
  document.getElementById('cd-main')
);
