import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import SearchBox from "./SearchBox";
import API from "./utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    result: [],
    email: "",
    name: "",
  };

  // When this component mounts, search for the movie Employees
  componentDidMount() {
    const BASEURL = "https://randomuser.me/api/?results=20&nat=us";
    const response = fetch(BASEURL);
    const EmployeeList = response;
    this.setState({ result: EmployeeList.result });
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      SearchResults <
      SearchBox <
      (
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">profilePic</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>{EmployeeList}</tbody>
        </table>
      )
    );
  }
}

export default SearchResults;
