var data = [
  {id: 1, author: "David", text: "This is one comment"},
  {id: 2, author: "Rebecca", text: "This is *another* comment"}
];

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div class="comment">
        <h2 class="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      )
    });
    return (
      <div className="commentList">
        {commentNodes}
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
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById("content")
);
