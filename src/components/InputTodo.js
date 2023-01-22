import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
      };

      onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
          })
        } else {
            alert("Please write item")
        }
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-container'>

        <input type="text" 
        // required - podemos usar esta opcion o con el alert
        placeholder="Add Todo..." 
        value= {this.state.title} 
        onChange={this.onChange}
        name="title"
        />
        
        <button className='input-submit'>Submit</button>
      </form>
    )
  }
}
export default InputTodo