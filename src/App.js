import React, { Component } from "react";
// import Header from "./components/Header";
import "./styles/reset.css";
import "./styles/App.css";
// import InformationParent from "./components/InformationParent";
import { capitalize } from "./helper/capitalize";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showCV: false,
      generalInformation: {
        name: "Ishmam Ahmed",
        email: "ishmam@gmail.com",
        number: "+880 1713144775",
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
    event.target[tag].placeholder = `${tag} has been added!`;
    setTimeout(() => {
      event.target[tag].placeholder = `Enter ${tag} here..`;
    }, 2000);
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
            <h1>Personal Details</h1>
            <input
              type="text"
              value={this.state.generalInformation.name}
              onChange={(event) =>
                this.setState({
                  generalInformation: {
                    ...this.state.generalInformation,
                    name: event.target.value,
                  },
                })
              }
            />
            <input
              type="text"
              value={this.state.generalInformation.email}
              onChange={(event) =>
                this.setState({
                  generalInformation: {
                    ...this.state.generalInformation,
                    email: event.target.value,
                  },
                })
              }
            />
            <input
              type="text"
              value={this.state.generalInformation.number}
              onChange={(event) =>
                this.setState({
                  generalInformation: {
                    ...this.state.generalInformation,
                    number: event.target.value,
                  },
                })
              }
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
