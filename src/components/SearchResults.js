import API from "../utils/API";
import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Jumbotron from "./Jumbotron";
import EmployeeList from "./Table";

class SearchResults extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
    first: 1,
    last: 1,
    email: 1,
  };

  componentDidMount = async () => {
    const results = await this.employeeSelection();
    await this.setState({ results, employees: results });
  };

  employeeSelection = async () => {
    let results = [];
    await API.search()
      .then((res) => {
        results = res.data.results.map((result) => {
          return {
            first: result.name.first,
            last: result.name.last,
            email: result.email,
            phone: result.phone,
            profilePic: result.profilePic,
          };
        });
      })
      .catch((err) => console.log(err));
    return results;
  };

  handleSort = async (event) => {
    const column = event.target.getAttribute("data-name");
    let sorted = this.state.employees.map((e) => e);
    sorted.sort((a, b) => {
      if (a[column] > b[column]) {
        return 1 * this.state[column];
      } else if (a[column] < b[column]) {
        return -1 * this.state[column];
      }
      return 0;
    });

    this.setState({ employees: sorted, [column]: this.state[column] * -1 });
  };

  handleInputChange = async (event) => {
    const value = event.target.value;
    const employees = await this.state.results.filter(
      (employee) =>
        employee.first.toLowerCase().includes(value.toLowerCase()) ||
        employee.last.toLowerCase().includes(value.toLowerCase()) ||
        employee.email.toLowerCase().includes(value.toLowerCase())
    );
    await this.setState({
      search: value,
      employees,
    });
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchBox
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList
          results={this.state.employees}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default SearchResults;
