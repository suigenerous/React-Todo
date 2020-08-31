import React from 'react';

class TodoForm extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
           dummyValue: '',
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const tempTodoObj = {
            id: Date.now(),
            text: this.props.inputStr,
            completed: false,
        }
        return this.props.onSubmit(tempTodoObj);
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Todo
            <input type="text" value={this.props.inputStr} onChange={this.props.changeHandler} />
            </label>
            <input type="submit" value="submit" />
        </form>
        )
    }
}

export default TodoForm;