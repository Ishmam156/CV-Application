import React, { Component } from "react";

export default class InputInformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content, handleChange } = this.props;
    return (
      <>
        {Object.keys(content).map((item, index) => {
          return (
            <input
              key={index}
              type="text"
              value={content[item]}
              onChange={(event) => handleChange(event, item)}
            />
          );
        })}
      </>
    );
  }
}
