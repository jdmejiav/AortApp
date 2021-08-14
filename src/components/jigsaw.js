import React, { Component } from "react";
import {JigsawPuzzle} from "react-jigsaw-puzzle";
import img from "./images/hearth.jpg";

export default class Rompecabezas extends Component {
  constructor() {
    super();
    this.state = {
      jeje: "",
    };
  }

  render() {
    return (
      <JigsawPuzzle
        imageSrc={img}
        rows={4}
        columns={6}
        onSolved={() => alert("Solved!")}
      ></JigsawPuzzle>
    );
  }
}
