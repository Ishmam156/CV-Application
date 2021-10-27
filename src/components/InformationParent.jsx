import React, { Component } from "react";
import InputElement from "./InputElement";
import "../styles/InformationParent.css";

export default class InformationParent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, title, fields } = this.props;

    return (
      <div className="informationContainer">
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
