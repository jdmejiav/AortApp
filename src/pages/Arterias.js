import React, { Component } from "react";
import JuegoArterias from "../components/juegoarterias";
import NavBarLog from "../components/NavBarLog";

export default class Arterias extends Component {
  render() {
    return (
      <div         style={{
        height: "100vh",
        background: "rgb(255,255,255)",
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 46%, rgba(157,205,241,1) 100%)",
      }}>
        <NavBarLog/>
        <JuegoArterias />
      </div>
    );
  }
}
