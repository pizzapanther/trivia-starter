import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function Narf (props) {
  console.log(props);
  return <div>Hi</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.api_count = 0;
    
    this.state = {
      questions: [],
      fname: 'Paul',
      lname: 'B'
    };
    this.get_questions();
  }
  
  get_questions(event) {
    console.log(event);
    this.api_count += 1;
    
    axios.get(
      'http://45.76.237.114:9090/api/get-questions'
      //{headers: {'JWT': localStorage.jwt}}
    )
     .then((response) => {
       this.setState({
         questions: response.data.results,
         fname: 'Dude'
       });
     })
     .catch(function () {
       // put error modal
     });
  }
  
  render() {
    var narf = "First &middot; Second";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(e) => this.get_questions(e)}>New Questions</button>
        <Narf fname={this.state.fname} lname={this.state.lname}/>
      </div>
    );
  }
}

export default App;
