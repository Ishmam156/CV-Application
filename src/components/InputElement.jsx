import React, { Component } from "react";
import { capitalize } from "../helper/capitalize";

export default class InputElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleGeneralInformationInput, title } = this.props;
    return (
      <form onSubmit={(event) => handleGeneralInformationInput(event, title)}>
        <label htmlFor={title}>{capitalize(title)}:</label>
        <br />
        <input type="text" id={title} name={title} />
        <input type="submit" value="+" />
      </form>
    );
  }
}
