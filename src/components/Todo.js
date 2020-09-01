import React from 'react';
// import styledComponent from 'styled-components';
import styles from './Todo.css'


class Todo extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        return(
            <div className = "todoContainer">
                <span className = {this.props.todo.completed ? "complete" : "incomplete"}>
                    {this.props.todo.text}
                </span>
                <button name = {this.props.id} onClick = {(event) =>{
                    event.preventDefault();
                    return this.props.flagToggler(this.props.todo)}}
                >
                    {this.props.todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>

            </div>
        )
    }
}

export default Todo;