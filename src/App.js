/*
 * @Author: kingford
 * @Date: 2021-11-06 14:49:30
 * @LastEditTime: 2021-11-16 15:15:35
 */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is a test of github jenkins auto deliver</p>
        <p>github webhooks</p>
        <p>github webhooks user token</p>
      </div>
    );
  }
}

export default App;
