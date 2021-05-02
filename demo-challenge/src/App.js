import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input:"",
      filter:"",
      list:[]
    }
  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  onClick = (e) => {
    e.preventDefault()
    axios.get(`https://api.unsplash.com/search/photos?query=${this.state.input}&client_id=Xuvl_FDU0QEQcnKBkbW2fQ_v9iyFTPFA4QKlMUyA4dA`)
      .then((res) => {
        this.setState({list: res.data.results })
        console.log(res)

      })
      .catch((err) => {
        console.log(err)
      })
      
  }
  render(){
    console.log(this.state.list)
    return (
      <div className="container">
        <form>
          <lable>Search place</lable><br/>
          <input type="text" name="input" value={this.state.input} onChange={this.onChange}></input><br/>
          <input type="submit" value="Sabmit" onClick={this.onClick}></input><br/>
          <lable>Filter</lable><br/>
          <input type="text" name="filter" value={this.state.filter} onChange={this.onChange}></input>
        </form>
        <ul>
          {this.state.list.filter(data =>
          data.user.name.indexOf(this.state.filter) !== -1).map((data) => {
            return <li key={data.id}>{data.user.name} - <img src={data.urls.full} alt={data.user.name} /></li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
