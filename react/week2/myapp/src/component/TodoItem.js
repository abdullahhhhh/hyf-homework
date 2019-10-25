import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        const { id, description } = this.props.todo;
        return (
          <div>
            <p>
              <input type="checkbox" onChange={ } /> {' '}
              { description }
              <button onClick={this.props.delTodo.bind(this, id)}>Delete</button>
            </p>
          </div>
        )
      }
    }
export default TodoItem;