import React, { Component } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import Header from "./components/Header";
import InputInformation from "./components/InputInformation";
import DisplayGeneralInformation from "./components/DisplayGeneralInformation";
import InputMultipleInformation from "./components/InputMultipleInformation";
import DisplayMultipleInformation from "./components/DisplayMultipleInformation";
import WelcomeMessage from "./components/WelcomeMessage";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showCV: false,
      generalInformation: {
        name: "Ishmam Chowdhury",
        currentTitle: "Telecom Professional",
        email: "ishmam@gmail.com",
        number: "+880 1713144775",
        location: "Dhaka, Bangladesh",
        introduction:
          "Goal oriented and extremely driven. Passionate about what I believe in and always eager to excel as well as learn to the fullest extent during any activity. Success is important, but not at the price of integrity.",
      },
      educationInformation: [
        {
          id: 1,
          subject: "The Full Stack Open",
          school: "University of Helsinki",
          yearStart: "2021",
          yearEnd: "2021",
        },
        {
          id: 2,
          subject: "CS50: Introduction to Computer Science",
          school: "Harvard University",
          yearStart: "2020",
          yearEnd: "2020",
        },
      ],
      professionalInformation: [
        {
          id: 1,
          companyName: "Grameenphone",
          jobTitle: "Specialist - Corporate Strategy",
          yearStart: "2020",
          yearEnd: "Present",
          description:
            "Working on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum, leo ac egestas interdum, orci ipsum congue odio, et porttitor erat risus ac nulla.",
        },
        {
          id: 2,
          companyName: "Grameenphone",
          jobTitle: "Specialist - Pricing",
          yearStart: "2020",
          yearEnd: "2021",
          description:
            "Working on Curabitur eget mauris ut turpis feugiat tempus. Aliquam dapibus sit amet justo et auctor. Sed sit amet mollis purus. Duis dapibus lobortis nisi.",
        },
      ],
    };

    this.handleGeneralInformationInput =
      this.handleGeneralInformationInput.bind(this);

    this.handleEducationInformationInput =
      this.handleEducationInformationInput.bind(this);

    this.handleEducationInformationDelete =
      this.handleEducationInformationDelete.bind(this);

    this.handleProfessionalInformationInput =
      this.handleProfessionalInformationInput.bind(this);

    this.handleProfessionalInformationDelete =
      this.handleProfessionalInformationDelete.bind(this);
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

  handleEducationInformationInput = (event, tag, id) => {
    event.preventDefault();
    this.setState({
      educationInformation: this.state.educationInformation.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              [tag]: event.target.value,
            }
      ),
    });
  };

  handleEducationInformationDelete = (id) => {
    this.setState({
      educationInformation: this.state.educationInformation.filter(
        (item) => item.id !== id
      ),
    });
  };

  handleProfessionalInformationInput = (event, tag, id) => {
    event.preventDefault();
    this.setState({
      professionalInformation: this.state.professionalInformation.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              [tag]: event.target.value,
            }
      ),
    });
  };

  handleProfessionalInformationDelete = (id) => {
    this.setState({
      professionalInformation: this.state.professionalInformation.filter(
        (item) => item.id !== id
      ),
    });
  };

  render() {
    return (
      <div>
        <WelcomeMessage />
        <div className="mainContent">
          <div className="CVInput">
            <div className="personalDetails">
              <Header title="Personal Details" />
              <InputInformation
                content={this.state.generalInformation}
                handleChange={this.handleGeneralInformationInput}
              />
              <Header title="Education Details" />
              <InputMultipleInformation
                contentArray={this.state.educationInformation}
                handleChange={this.handleEducationInformationInput}
                handleDelete={this.handleEducationInformationDelete}
              />
              <Header title="Professional Details" />
              <InputMultipleInformation
                contentArray={this.state.professionalInformation}
                handleChange={this.handleProfessionalInformationInput}
                handleDelete={this.handleProfessionalInformationDelete}
              />
            </div>
          </div>
          <div className="CVShow">
            <DisplayGeneralInformation
              content={this.state.generalInformation}
            />
            <DisplayMultipleInformation
              title="Education"
              content={this.state.educationInformation}
            />
            <DisplayMultipleInformation
              title="Professional Experience"
              content={this.state.professionalInformation}
            />
          </div>
        </div>
        <footer>Testing here</footer>
      </div>
    );
  }
}
