import React, { Component } from "react";

import NavBarLog from "../components/NavBarLog";
import CardPairs from "../components/cardPairs";
export default class CardPage extends Component {
  render() {
    return (
      <div
        style={{
          height:"100%",
          background: "rgb(255,255,255)",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 46%, rgba(157,205,241,1) 100%)",
        }}
      >
        <NavBarLog />
        <CardPairs />
      </div>
    );
  }
}
