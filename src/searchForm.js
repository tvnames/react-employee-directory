import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployee("");
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
  };

  // When the form is submitted, search the OMDB API for the value of
  // `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  renderEmployeeDetail = () => {
    if (this.state.result.name) {
      return (
        <EmployeeDetail
          name={this.state.result.name}
          phoneNum={this.state.result.phoneNum}
          profilePic={this.state.result.profilePic}
          email={this.state.result.email}
          DOB={this.state.result.DOB}
        />
      );
    }
    return <h3>No Results to Display</h3>;
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={this.state.result.name || "Search for an Employee"}>
              {this.renderEmployeeDetail()}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchForm;
