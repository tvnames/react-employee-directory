import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Jumbotron from "../src/Jumbotron";
import SearchBox from "./SearchBox";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Jumbotron />
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}

export default App;
