import axios from 'axios';
import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote:null
    }
  }
  componentDidMount = () => {
    this.onClick()
  }
  onClick = () => {
    // this.setState({quote: null})
    axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((res) => {
      console.log(res.data.data[0])
      this.setState({quote: res.data.data[0]})
    })
    .catch((err) => {
      console.log(err)
    })
    console.log(this.state.quote)
  }
  render() {
    return (
      <div className="App container">
        <h1 className="App-header">Quote Generator</h1>
        {this.state.quote ?
        <div className="container">
          <p>{this.state.quote.quoteText}</p>
          <p className="auth">{this.state.quote.quoteAuthor}</p>
        </div>:
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>}
        <button className="btn btn-warning" onClick={this.onClick}>New Quote</button>
      </div>
    );
  }
}

export default App;
