import React from "react";

function Table(props) {
  const employees = props.results;
  return (
    <table className="table align-middle table-primary table-hover table-striped table-bordered">
      <thead>
        <tr>
          <th>profilePic</th>
          <th data-name="first" {...props.handleSort}>
            First Name
          </th>
          <th data-name="last" {...props.handleSort}>
            Last Name
          </th>
          <th data-name="email" {...props.handleSort}>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((result) => (
          <tr key={`${result.first} ${result.last} ${result.date}`}>
            <td className="d-flex justify-content-center">
              <img
                alt={`${result.first} ${result.last}`}
                src={result.profilePic}
                className="rounded-circle"
              />
            </td>
            <td>{result.first}</td>
            <td>{result.last}</td>
            <td>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
