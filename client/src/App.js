import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi there!</p>
          <div>
            <a href="/auth/google">Sign In with Google</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
