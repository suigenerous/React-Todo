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
    this.onSubmit = this.onSubmit.bind(this);
  }

  // change handler

  changeHandler = (event) => {
    event.preventDefault();
    return this.setState({inputStr: event.target.value});
  };  

  // onSubmit adds todo to array

  onSubmit = (todoObj) => {
    const tempArr = [...this.state.displayArr];
    tempArr.push(todoObj);
    this.setState({inputStr: ''});
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
          onSubmit = {this.onSubmit}
        />
        <TodoList
          todosArr = {this.state.displayArr}
        />
      </div>
    );
  }
}

export default App;
