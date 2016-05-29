// tutorial1.js
// Fetching from the server #


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
})


var CommentBox = React.createClass({
    displayName: 'CommentBox',
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
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={200000} />,
  document.getElementById('content')
);