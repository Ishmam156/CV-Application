import React, { Component } from "react";

export default class DisplayGeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;
    return (
      <div className="CVShowPersonalDetails">
        <div className="firstPersonalDiv">
          <div className="innerFirstPersonalDiv">
            <h1>{content.name}</h1>
            <p>
              <em>{content.currentTitle}</em>
            </p>
          </div>
          <div>
            <p>{content.number}</p>
            <p>{content.email}</p>
            <p>{content.location}</p>
          </div>
        </div>
        <hr />
        <div className="secondPersonalDiv">
          <p>{content.introduction}</p>
        </div>
      </div>
    );
  }
}
