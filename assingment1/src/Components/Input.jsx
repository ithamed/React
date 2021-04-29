import React, { Component } from 'react'

class Input extends Component {
  state = {
      title: "",
      description: ""
  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  onClick = () => {
    const newTodo = {
      title: this.state.title,
      description: this.state.description
    }
    this.props.addTodo(newTodo)
  }
  render(){
    return (
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" id="exampleFormControlInput1" value={this.state.title} onChange={this.onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.description} onChange={this.onChange}></textarea>
        </div>
        <button className="btn btn-danger margin" onClick={this.onClick}>Save</button>
      </div>
    )
  }
}

export default Input
