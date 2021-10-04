import React, { Component } from "react";

import CrosswordComponent from "../components/crossword";
import NavbarLog from "../components/NavBarLog";

export default class CrosswordPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        style={{
          
          background: "rgb(187,195,204)",
          background:
            "linear-gradient(90deg, rgba(187,195,204,0.9976365546218487) 0%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 67%, rgba(95,221,229,1) 100%)",
        }}
      >
        <NavbarLog />
        <CrosswordComponent />
      </div>
    );
  }
}
