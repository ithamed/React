import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title:'Take out the trash',
      //   complete: false
      // },
      // {
      //   id: uuidv4(),
      //   title:'Dinner with wife',
      //   complete: false
      // },
      // {
      //   id: uuidv4(),
      //   title:'Meeting with boss',
      //   complete: false
      // },
    ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo;
    })})
  }
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]}))
    // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      complete: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   complete: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={ About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
