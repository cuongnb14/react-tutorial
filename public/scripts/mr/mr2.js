// Best pratices: Controlled components – a simple form 
var TextBox = React.createClass({
    render: function() {
        return <input type='text' 
                name={this.props.name}
                type="text"
                value={this.props.value} 
                onChange={this.props.onChange}
                />;
    }
});

var ExampleForm = React.createClass({
    getInitialState() {
        return {
            form: {firstName:"Cuong", lastName: "Nguyen"} 
        };
    },
    onChange: function(event){
        this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
    },
    onSubmit: function(event){
        event.preventDefault();
        alert(this.state.form.firstName+" "+this.state.form.lastName);
    },
    render: function(){
        return (
            <form onSubmit={this.onSubmit}>
                <TextBox name='firstName'
                value={this.state.form.firstName}
                onChange={this.onChange}/>
                <TextBox name='lastName'
                value={this.state.form.lastName}
                onChange={this.onChange}/>
                <button className='btn btn-success'
                type='submit'>Submit</button>
            </form>
        );
    }
});

ReactDOM.render(
    <ExampleForm/>,
    document.getElementById('content')
);
