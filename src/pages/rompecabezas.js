import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { JigsawPuzzle } from "../components/index";
import hearth from "../components/images/cabeza.png";
export default class Rompecabezas extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div
          style={{
            "margin":"60px",
            "border-color": "#000 !important",
            "background-color": "#fff",
            "border-style": "solid",
          }}
        >
          <JigsawPuzzle
            imageSrc={hearth}
            rows={4}
            columns={2}
            onSolved={() => alert("Solved!")}
          />
        </div>
      </div>
    );
  }
}
