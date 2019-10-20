import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { text, id } = this.state.todo;
//     return (
//       <li key={id}>
//         <h1>{text}</h1>
//         onClick={() => this.props.deleteItem(id.key)}
//         {id.text}
//       </li>
//     );
//   }
// }

render() {
  return this.props.TodoList.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
  ));
}
}

export default TodoList;
