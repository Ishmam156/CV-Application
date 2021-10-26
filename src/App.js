import React, { Component } from "react";
import Header from "./components/Header";
import "./styles/reset.css";
import "./styles/App.css";
import InformationParent from "./components/InformationParent";
import { capitalize } from "./helper/capitalize";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showCV: false,
      generalInformation: {
        name: "",
        email: "",
        number: "",
      },
      educationInformation: {
        school: "",
        subject: "",
        date: "",
      },
      professionalInformation: {
        name: "",
        title: "",
        task: "",
        date: "",
      },
    };

    this.handleGeneralInformationInput =
      this.handleGeneralInformationInput.bind(this);

    this.handleEducationInformationInput =
      this.handleEducationInformationInput.bind(this);

    this.handleProfessionalInformationInput =
      this.handleProfessionalInformationInput.bind(this);
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

  handleEducationInformationInput = (event, tag) => {
    event.preventDefault();
    this.setState({
      educationInformation: {
        ...this.state.educationInformation,
        [tag]: event.target[tag].value,
      },
    });
    event.target[tag].value = "";
  };

  handleProfessionalInformationInput = (event, tag) => {
    event.preventDefault();
    this.setState({
      professionalInformation: {
        ...this.state.professionalInformation,
        [tag]: event.target[tag].value,
      },
    });
    event.target[tag].value = "";
  };

  render() {
    return (
      <main className="mainContent">
        <Header />
        <InformationParent
          handleChange={this.handleGeneralInformationInput}
          title="General Information"
          fields={Object.keys(this.state.generalInformation)}
        />
        <InformationParent
          handleChange={this.handleEducationInformationInput}
          title="Education Information"
          fields={Object.keys(this.state.educationInformation)}
        />
        <InformationParent
          handleChange={this.handleProfessionalInformationInput}
          title="Professional Information"
          fields={Object.keys(this.state.professionalInformation)}
        />
        <br />
        <button
          onClick={() =>
            this.setState({
              showCV: !this.state.showCV,
            })
          }
        >
          {this.state.showCV ? "Clear CV" : "Populate CV"}
        </button>
        {this.state.showCV &&
          Object.keys(this.state.generalInformation).map((item, index) => (
            <div key={index}>
              {capitalize(item)}: {this.state.generalInformation[item]}
            </div>
          ))}
        {this.state.showCV &&
          Object.keys(this.state.educationInformation).map((item, index) => (
            <div key={index}>
              {capitalize(item)}: {this.state.educationInformation[item]}
            </div>
          ))}
        {this.state.showCV &&
          Object.keys(this.state.professionalInformation).map((item, index) => (
            <div key={index}>
              {capitalize(item)}: {this.state.professionalInformation[item]}
            </div>
          ))}
      </main>
    );
  }
}
