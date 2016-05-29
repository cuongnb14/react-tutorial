// tutorial1.js
// Hook up the data model
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var CommentList = React.createClass({
    render: function(){
        var commentNodes =  this.props.data.map(function(comment) {
                                return (
                                        <CommentForm key={comment.id} author={comment.author}> {comment.text} </CommentForm>
                                    );
                            });

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
            );
    },
});

var CommentForm = React.createClass({
    render: function(){
        return (
                <div className="commenst-form">
                    <p>*Author*: {this.props.author} - <span> {this.props.children}</span> </p> 
                </div>
            );
    },
})


var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render() {
        return (
            <div className="comment-box">
                <h1>CommentBox</h1>
                <CommentList data={this.props.data} />
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);