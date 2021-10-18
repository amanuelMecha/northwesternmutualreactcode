import React from "react";

function Login(props) {
  return (
    <div className="App">
      <h2>Welcome to student list app</h2>
      <label>Email </label>
      <input
        name="email"
        type="text"
        placeholder="enter email"
        value={props.email}
        onChange={props.onChangeEvent}
      />
      <br />
      <label>Password </label>
      <input
        name="password"
        type="text"
        placeholder="enter email"
        value={props.password}
        onChange={props.onChangeEvent}
      />
      <br />
      <button
        onClick={props.loginFunction}
        disabled={!props.email || !props.password}
      >
        login
      </button>
    </div>
  );
}

export default Login;
