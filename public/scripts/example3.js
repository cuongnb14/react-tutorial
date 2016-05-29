// tutorial1.js
// Component Properties
var CommentList = React.createClass({
    render: function(){
        return (
            <div className="comment-list">
                <CommentForm author="Jayce"> Hello </CommentForm>
                <CommentForm author="Zed"> Hi </CommentForm>
            </div>
            );
    },
});

var CommentForm = React.createClass({
    render: function(){
        return (
                <div className="comment-form">
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
                <CommentList />
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);