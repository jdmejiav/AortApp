import React, { Component } from "react";
import WordSearch from "../components/wordsearch";
import NavBarLog from "../components/NavBarLog";

export default class WordSearchPage extends Component {
  render() {
    return (
      <div>
        <NavBarLog />
        <WordSearch />
      </div>
    );
  }
}
