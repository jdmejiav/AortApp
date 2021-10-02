import React, { Component } from "react";

import NavBarLog from "../components/NavBarLog";
import CardPairs from "../components/cardPairs";
export default class CardPage extends Component {
  render() {
    return (
      <div>
        <NavBarLog/>
        <CardPairs />
      </div>
    );
  }
}
