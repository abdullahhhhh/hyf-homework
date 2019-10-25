import React,{Component} from 'react';

class AddTodo extends Component {
    state = {
      description: ""
    };
    handleChange = e => {
      this.setState({
        description: e.target.value,
        done:false
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.addTodo(this.state);
      this.setState({description:''})
    };
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Add todo: </label>
            <input type="text" onChange={this.handleChange} value={this.state.description} />
          </form>
        </div>
      );
    }
  }
  export default AddTodo;