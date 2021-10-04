import React, { Component } from "react";
import WordSearch from "../components/wordsearch";
import NavBarLog from "../components/NavBarLog";

export default class WordSearchPage extends Component {
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
        <WordSearch />
      </div>
    );
  }
}
