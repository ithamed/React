import Head from './Components/Head';
import Input from './Components/Input';
import Button from './Components/Button';
import Table from './Components/Table';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'exam',
          description: 'i have a React exam in friday.'
        }
      ],
      showAddForm: false
    }  
  }

  addTodo = (newTodo) => {
    const newItem = {
      id: this.state.todos.length+1,
      title: newTodo.title,
      description: newTodo.description
    }
    this.setState({todos: [...this.state.todos, newItem]})
  }
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  showInput = () => {
    this.setState({showAddForm: !this.state.showAddForm})
  }
  render() {
    return (
      <div className="container">
        <Head />
        <Button name="Add" showInput={this.showInput}/>
        {this.state.showAddForm && <Input addTodo={this.addTodo}/>}
        <Table delTodo={this.delTodo} todos={this.state.todos}/>
      </div>
    );
  };
};

export default App;
