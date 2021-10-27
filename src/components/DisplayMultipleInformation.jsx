import React, { Component } from "react";

export default class DisplayMultipleInformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, content } = this.props;

    return (
      <div className="outerMultipleInformation">
        <h2>{title}</h2>
        {title.includes("Education") &&
          content.map((item) => {
            return (
              <div key={item.id} className="educationOuterDiv">
                <div className="educationFirstDiv">
                  <p>
                    <em>{item.subject}</em>
                  </p>
                </div>
                <div className="educationSecondDiv">
                  <p>
                    {item.school} |{" "}
                    <em>
                      {item.yearStart} - {item.yearEnd}
                    </em>
                  </p>
                </div>
              </div>
            );
          })}
        {title.includes("Professional") &&
          content.map((item) => {
            return (
              <div key={item.id}>
                <div className="educationOuterDiv">
                  <div className="educationFirstDiv">
                    <p>
                      <em>{item.jobTitle}</em>
                    </p>
                  </div>
                  <div className="educationSecondDiv">
                    <p>
                      {item.companyName} |{" "}
                      <em>
                        {item.yearStart} - {item.yearEnd}
                      </em>
                    </p>
                  </div>
                </div>
                <div className="professionDescription">{item.description}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
