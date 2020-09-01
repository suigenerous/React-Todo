import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            dummyState: '',
        }
    }



    render(){
        return(
            <div>
               {this.props.todosArr.map(todo => {
                   if(todo){
                    return <Todo key = {todo.id} todo = {todo} flagToggler = {this.props.flagToggler}/>
                   }
                })}
            </div>
        )
    }
}

export default TodoList;