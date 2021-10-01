import React, { Component } from "react";

import CrosswordComponent from "../components/crossword";
import Navbar from "../components/NavBar";

export default class CrosswordPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <CrosswordComponent />
      </div>
    );
  }
}
