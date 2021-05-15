import React from "react";

function searchBox(props) {
  return (
    <form>
      <div className="form-group formGroup">
        <label htmlFor="search"></label>
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
