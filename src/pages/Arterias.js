import React, { Component } from "react";
import JuegoArterias from "../components/juegoarterias";
import NavBarLog from "../components/NavBarLog";

export default class Arterias extends Component {
  render() {
    return (
      <>
        <NavBarLog/>
        <JuegoArterias />
      </>
    );
  }
}
