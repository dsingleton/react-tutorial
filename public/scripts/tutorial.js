var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Comment List
      </div>
    )
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Comment Box
      </div>
    )
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById("content")
);
