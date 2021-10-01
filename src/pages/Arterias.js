import React, { Component } from "react";
import JuegoArterias from "../components/juegoarterias";
import NavBar from "../components/NavBar";

export default class Arterias extends Component {
  render() {
    return (
      <>
        <NavBar />
        <JuegoArterias />
      </>
    );
  }
}
