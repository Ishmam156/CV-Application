import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
