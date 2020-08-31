import React from 'react';

class Todo extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            dummyState: ''
        }
    }

    render(){
        return(
            <div>
                {this.props.todo.text}
            </div>
        )
    }
}

export default Todo;