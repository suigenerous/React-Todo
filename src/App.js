import React from 'react';
import TodoForm from './components/TodoForm';

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

  changeHandler = event => {
    this.setState({inputStr: event.target.value});
  };  

  // onSubmit adds todo to array

  onSubmit = event => {
    event.preventDefault();
    const tempDisplayArr = [[...this.displayArr]];
    return this.setState({displayArr: [tempDisplayArr.push(this.inputStr)]});
  }  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addDisabled = {this.state.addDisabled}
          changeHandler = {this.changeHandler}
          inputStr = {this.state.inputStr}
          handleSubmit = {this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
