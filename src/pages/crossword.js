import React, { Component } from "react";

import CrosswordComponent from "../components/crossword";
import NavbarLog from "../components/NavBarLog";

export default class CrosswordPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <NavbarLog />
        <CrosswordComponent />
      </div>
    );
  }
}
