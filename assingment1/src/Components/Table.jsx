import React, { Component } from 'react'

class Table extends Component {
  render() {

    return (
      <div>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {this.props.todos.map((todo, index)=>
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td><button className="btn btn-danger" onClick={this.props.delTodo.bind(this, todo.id)}>Done</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
