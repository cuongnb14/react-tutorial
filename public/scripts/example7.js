// tutorial1.js
// Add comment


var CommentList = React.createClass({
    render: function(){

        var commentNodes =  this.props.data.map(function(comment) {
                                return (
                                        <Comment key={comment.id} author={comment.author}> {comment.text} </Comment>
                                    );
                            });
        return (
            <div className="comment-list">
                {commentNodes}
            </div>
            );
    },
});

var Comment = React.createClass({
    render: function(){
        return (
                <div className="commenst-form">
                    <p>{this.props.author} - <span> {this.props.children}</span> </p> 
                </div>
            );
    },
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
  e.preventDefault();
  var author = this.state.author.trim();
  var text = this.state.text.trim();
  if (!text || !author) {
    return;
  }
  // TODO: send request to the server
  console.log("Send server: "+author+" - "+text);
  this.props.onCommentSubmit({author: author, text: text});
  this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


var CommentBox = React.createClass({
    displayName: 'CommentBox',
    handleCommentSubmit: function (comment){
      // TODO: submit to the server and refresh the list
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    loadComments: function () {
        $.ajax({
            url: this.props.url,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(data){
                    this.setState({data: data});
                }.bind(this),
            error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
        });  
    },
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function(){
        this.loadComments();
        setInterval(this.loadComments, this.props.pollInterval);
    },
    render() {
        return (
            <div className="comment-box">
                <h1>CommentBox</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={200000} />,
  document.getElementById('content')
);