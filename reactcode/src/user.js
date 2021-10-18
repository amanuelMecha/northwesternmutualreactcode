import React from "react";
function User(props) {
  return (
    <tr>
      <td>
        <b></b> {props.id}
      </td>
      <td>
        <b></b> {props.email}
      </td>
      <td>
        <b></b> {props.password}
      </td>
    </tr>
  );
}

export default User;
