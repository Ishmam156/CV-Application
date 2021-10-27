import React, { Component } from "react";

export default class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcomeMessage">
        <h1>CV Builder App</h1>
        <p>
          Change the text on the left hand side to generate your CV on the
          right!
        </p>
        <p>
          Complete inspiration from{" "}
          <a
            href="https://shanesc.github.io/top-cv-maker/"
            target="_blank"
            rel="noreferrer"
          >
            Shane Mitchell
          </a>{" "}
          and made for{" "}
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
        </p>
      </div>
    );
  }
}
