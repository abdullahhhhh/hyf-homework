  
import React, { Component } from 'react';
// import TodoAdd from './TodoAdd';
export class AddTodo extends Component { 

    render() {
      const {id, text} = this.props;    
       console.log(text);
      return (
        <div className="addDiv" >        
          <button onClick={this.props.TodoAdd.bind(this, id)} >Add Todo</button>
          <p/>{''} {text}       
        </div>
      )
    }
  }
export default TodoAdd;