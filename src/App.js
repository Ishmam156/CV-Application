import React, { Component } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import Header from "./components/Header";
import DisplayInformation from "./components/DisplayInformation";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showCV: false,
      generalInformation: {
        name: "Ishmam Ahmed",
        currentTitle: "Telecom Professional",
        email: "ishmam@gmail.com",
        number: "+880 1713144775",
        location: "Dhaka, Bangladesh",
        introduction:
          "Hard working indivdual and some other lines here, so let me check yes",
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
        [tag]: event.target.value,
      },
    });
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
        <div className="CVInput">
          <div className="personalDetails">
            <Header title="Personal Details" />
            <DisplayInformation
              content={this.state.generalInformation}
              handleChange={this.handleGeneralInformationInput}
            />
          </div>
        </div>
        <div className="CVShow">
          <div className="CVShowPersonalDetails">
            <h1>{this.state.generalInformation.name}</h1>
            <h1>{this.state.generalInformation.email}</h1>
            <h1>{this.state.generalInformation.number}</h1>
          </div>
        </div>
      </main>
    );
  }
}
