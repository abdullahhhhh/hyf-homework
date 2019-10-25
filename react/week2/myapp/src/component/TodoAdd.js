  
import React, { Component } from 'react';
import { jsxClosingElement } from '@babel/types';
 class TodoAdd extends Component { 
handleSubmet=()=> {
console.log("hi")
}
    render() {
      const {id, text} = this.props;    
       console.log(text);
      return (
        <div className="addDiv" >        
          <button onClick={this.handleSubmet} >Add Todo</button>
          <p/>{''} {text}       
        </div>
      )
    }
  }
export default TodoAdd;