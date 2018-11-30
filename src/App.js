import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Welcome To Members Contribution
         <Link to="/welcome">
         <button className="get-started">Get Started</button>
         </Link>
        </header>
      </div>
    );
  }
}

export default App;
