import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  // constructor 

  constructor (){
    super();
    this.state = {
      displayArr: [],
      inputStr: '',
      addDisabled: false
    };
    this.changeHandler= this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // change handler

  changeHandler = (event) => {
    event.preventDefault();
    return this.setState({inputStr: event.target.value});
  };  

  // onSubmit and handleSubmit functions

  updateArray = (todoObj) => {
    const tempArr = [...this.state.displayArr];
    tempArr.push(todoObj);
    this.setState({inputStr: ''});
    return this.setState({displayArr: tempArr});
  }  

  handleSubmit = (event) =>{
    event.preventDefault();
    const tempTodoObj = {
        id: Date.now(),
        text: this.state.inputStr,
        completed: false,
    }
    return this.updateArray(tempTodoObj);
}

  // toggle complete/incomplete

  flagToggler = (todo) =>{
    const tempDisplayArr = [...this.state.displayArr];
    for(let i = 0; i < tempDisplayArr.length; i++){
      if (tempDisplayArr[i]){
        if (tempDisplayArr[i].id === todo.id){
          tempDisplayArr[i].completed = !tempDisplayArr[i].completed;
        }
      }
    }
    return this.setState({displayArr: tempDisplayArr});
  }

  // clear completed

  clearComplete = (event) => {
    event.preventDefault();
    // const tempArr = [...this.state.displayArr.map(todoObj => {
    //   if (todoObj.completed === false){
    //     return todoObj;
    //   }
    // })];
    const tempArr = [...this.state.displayArr].map(todoObj =>{
      if(todoObj){
        if (todoObj.completed === false){
          return todoObj;
        }
      }});
    // return this.setState({displayArr: tempArr});
    return this.setState({displayArr: tempArr});
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addDisabled = {this.state.addDisabled}
          changeHandler = {this.changeHandler}
          inputStr = {this.state.inputStr}
          handleSubmit = {this.handleSubmit}
        />
        {this.state.displayArr.length !== 0 ? 
        <TodoList
          todosArr = {this.state.displayArr}
          flagToggler = {this.flagToggler}
        />
        : 'no todos yet'
         }
        <button onClick = {this.clearComplete}>Clear Complete</button>
      </div>
    );
  }
}

export default App;