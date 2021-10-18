// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
