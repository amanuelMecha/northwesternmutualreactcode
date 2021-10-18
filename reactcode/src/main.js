import React, { Component } from "react";
import axios from "axios";
import Login from "./login";
import ListOfUsers from "./listOfUsers";

export default class Main extends Component {
  state = {
    isLogIn: false,
    invalidCredential: false,
    loginUser: {
      email: "",
      password: "",
    },
  };
  onChangeEvent = (e) => {
    console.log("test onchange", e.target.value);
    const loginUser = { ...this.state.loginUser };
    loginUser[e.target.name] = e.target.value;
    this.setState({ loginUser: loginUser });
  };

  loginFunction = () => {
    console.log("this.state", this.state);
    axios
      .post("http://localhost:5000/users/login", this.state.loginUser)
      .then((res) => {
        if (res.data.status === "success") {
          console.log("status", "succes");
          this.setState({ isLogIn: true });
        } else {
          alert("invalid username or password");
        }
      });
  };
  render() {
    if (!this.state.isLogIn) {
      return (
        <Login
          email={this.state.loginUser.email}
          password={this.state.loginUser.password}
          onChangeEvent={this.onChangeEvent}
          loginFunction={this.loginFunction}
        />
      );
    }
    return (
      <div>
        <ListOfUsers />
      </div>
    );
  }
}
