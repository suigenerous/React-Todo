import React from 'react';

class TodoForm extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
           dummyValue: '',
        }
    }
   

    render(){
        return (
        <form onSubmit={this.props.handleSubmit}>
            <label>Todo
            <input type="text" value={this.props.inputStr} onChange={this.props.changeHandler} />
            </label>
            <input type="submit" value="submit" />
        </form>
        )
    }
}

export default TodoForm;