import React, { Component } from "react";
import { newID } from "../helper/idGenerator";

export default class InputMultipleInformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { contentArray, handleChange, handleDelete } = this.props;
    return (
      <>
        {contentArray.map((content) => {
          return (
            <React.Fragment key={content.id}>
              {Object.keys(content).map((item, idx) => {
                if (item !== "id") {
                  return (
                    <input
                      key={content.id + idx + 1}
                      type="text"
                      value={content[item]}
                      onChange={(event) =>
                        handleChange(event, item, content.id)
                      }
                    />
                  );
                }
                return (
                  <React.Fragment key={content.id + idx * 10}></React.Fragment>
                );
              })}
              <button onClick={() => handleDelete(content.id)}>Delete</button>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
