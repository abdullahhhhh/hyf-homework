import React from 'react';
import TodoList from './component/TodoList';
import TodoAdd from './component/TodoAdd';
import TodoItem from './component/TodoItem';
import './App.css';

class App extends React.Component {
state = {
  todos:[{
    "id": 1,
    "description": "Get out of bed"
  },
  {
    "id": 2,
    "description": "Brush teeth"
  },
  {
    "id": 3,
    "description": "Eat breakfast"
  }]
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Todo List
        </header>
         <TodoList todos={this.props.todos} />
         <TodoAdd TodoAdd= {this.props.TodoAdd}/>
         <TodoItem TodoItem = {this.props.TodoItem}/>
      </div>
    );
  
  }
}
  

export default App;
