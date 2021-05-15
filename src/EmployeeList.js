import React from "react";

function EmployeeList(props) {
  return (
    <div>
      <table class="table">
        <tbody>
          <tr>
            <th> {props.profilePic}</th>
            <th> {props.name}</th>
            <th> {props.phone}</th>
            <th> {props.email}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
