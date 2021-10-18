import React, { Component } from "react";
import axios from "axios";
import User from "./user";

export default class ListOfUsers extends Component {
  state = { ListOfusers: [] };

  componentDidMount = () => {
    axios.get("http://localhost:5000/users").then((res) => {
      this.setState({ ListOfusers: res.data.result });
    });
  };
  render() {
    return (
      <div className="App">
        <h1>list of users</h1>
        <table align="center" border="1px" width="">
          <thead>
            <th>Id</th>
            <th>Email</th>
            <th> Password </th>
          </thead>
          {this.state.ListOfusers.map((item) => {
            return (
              <User
                key={item._id}
                id={item._id}
                email={item.email}
                password={item.password}
              />
            );
          })}
        </table>
      </div>
    );
  }
}
