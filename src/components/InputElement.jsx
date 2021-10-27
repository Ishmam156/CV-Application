import React, { Component } from "react";
import { capitalize } from "../helper/capitalize";

export default class InputElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInputChange, title } = this.props;
    return (
      <form
        onSubmit={(event) => handleInputChange(event, title)}
        className="individualForm"
      >
        <label htmlFor={title}>{capitalize(title)}:</label>
        <input
          type="text"
          id={title}
          name={title}
          placeholder={`Enter ${title} here..`}
        />
        <input type="submit" value="+" />
      </form>
    );
  }
}
