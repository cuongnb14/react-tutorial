var TextBox = React.createClass({
    getInitialState() {
        return {
            msg: "Hello"  
        };
    },
    onChange: function (event){
        this.setState({msg: event.target.value});
    },
    render: function() {
        return <input type='text' value={this.state.msg} onChange={this.onChange}/>;
    }
});

ReactDOM.render(
    <TextBox/>,
    document.getElementById('content')
);
