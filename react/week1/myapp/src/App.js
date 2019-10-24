import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';

class App extends Component{
  render() {
    return (
      <div>
        hello from App Component
        <TodoInput/>
        <TodoList/>
        <TodoItem/>
      </div>
    )
    
    
  }
}



export default App;
