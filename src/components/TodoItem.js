import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return{
      background:'#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.complete ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo
    const btnStyle = {
      bachground: "#ff0000",
      color: '#fff',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '5px',
      cursor: 'pointer',
      float: 'right'
    }
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} 
          style={btnStyle}>Delete</button>
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
const btnStyle = {
  backgroundColor: "red",
  color: '#ff0000',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
