import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Amanuel App</h1>
        <label>Email</label>
        <input />
        <br />
        <label>Password</label>
        <input />
        <br />
        <button>login</button>
      </div>
    );
  }
}

export default App;
