import React, { Component } from 'react';
import logo from './logo.svg';
import GithubList from './features/github-list/containers/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github List</h2>
        </div>

        <div className="App-content">
          <GithubList />
        </div>
      </div>
    );
  }
}

export default App;
