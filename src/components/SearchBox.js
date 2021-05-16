import React from "react";

function searchBox(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search here"
          id="search"
        />
      </div>
    </form>
  );
}

export default searchBox;
