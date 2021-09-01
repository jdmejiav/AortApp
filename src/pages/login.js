import React, { Component } from "react";

import "../styles/login.css";
import NavBar from "../components/NavBar";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
    };
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
