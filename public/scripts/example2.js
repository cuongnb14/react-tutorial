// tutorial1.js
// Composing components
var CommentList = React.createClass({
    render: function(){
        return (
            <div className="comment-list">
                Comment list
            </div>
            );
    },
});

var CommentForm = React.createClass({
    render: function(){
        return (
                <div className="comment-form">
                    Comment Form
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
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);