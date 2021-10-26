import React, { Component } from "react";
import Header from "./components/Header";
import "./styles/reset.css";
import "./styles/App.css";
import Generalnformation from "./components/Generalnformation";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInformation: {
        name: "",
        email: "",
        number: "",
      },
      inputGeneralInformation: {
        name: "",
        email: "",
        number: "",
      },
    };

    this.handleGeneralInformationInput =
      this.handleGeneralInformationInput.bind(this);
  }

  handleGeneralInformationInput = (event, tag) => {
    event.preventDefault();
    this.setState({
      generalInformation: {
        ...this.state.generalInformation,
        [tag]: event.target[tag].value,
      },
    });
    event.target[tag].value = "";
  };

  render() {
    return (
      <main className="mainContent">
        <Header />
        <Generalnformation
          handleGeneralInformationInput={this.handleGeneralInformationInput}
        />
        <br />
        <h1>{this.state.generalInformation.name}</h1>
        <br />
        <h1>{this.state.generalInformation.email}</h1>
        <br />
        <h1>{this.state.generalInformation.number}</h1>
      </main>
    );
  }
}
