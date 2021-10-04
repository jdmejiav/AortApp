import React, { Component } from "react";
import Ahorcadito from "../components/ahorcadito";
import NavBarLog from "../components/NavBarLog";

export default class AhorcaditoPAge extends Component {
  render() {
    return (
      <div
        style={{
          
          background: "rgb(255,255,255)",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 46%, rgba(157,205,241,1) 100%)",
        }}
      >
        <NavBarLog />
        <Ahorcadito />
      </div>
    );
  }
}
