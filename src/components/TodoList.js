import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            dummyState: '',
        }
    }

    // set key to date


    render(){
        return(
            <div>
               {this.props.todosArr.map(todo =>{
                   return <Todo key = {todo.id} todo = {todo} completed = {todo.completed}/>
               })}
            </div>
        )
    }
}

export default TodoList;