import React, { Component } from "react";
import InputElement from "./InputElement";

export default class InformationParent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, title, fields } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        {fields.map((item, index) => (
          <InputElement
            key={index}
            handleInputChange={handleChange}
            title={item}
          />
        ))}
      </div>
    );
  }
}
