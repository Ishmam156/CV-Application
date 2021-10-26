import React, { Component } from "react";
import InputElement from "./InputElement";

export default class Generalnformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleGeneralInformationInput } = this.props;

    return (
      <div>
        <InputElement
          handleGeneralInformationInput={handleGeneralInformationInput}
          title="name"
        />
        <InputElement
          handleGeneralInformationInput={handleGeneralInformationInput}
          title="email"
        />
        <InputElement
          handleGeneralInformationInput={handleGeneralInformationInput}
          title="number"
        />
      </div>
    );
  }
}
