import React from 'react';
// import styledComponent from 'styled-components';
import styles from './Todo.css'


class Todo extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            completed: this.props.completed,
        }
    }

    handleInputChange = (event) => {
        return this.setState({completed: event.target.checked});
    }   

    const 

    render(){
        return(
            <div className = "todoContainer">
                <span className = {this.state.completed ? "complete" : "incomplete"}>
                    {this.props.todo.text}
                </span>
                <input
                    name="isComplete"
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.handleInputChange} 
                />
            </div>
        )
    }
}

export default Todo;