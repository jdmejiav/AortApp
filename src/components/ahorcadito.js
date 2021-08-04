import React, { Component } from "react";

import "./ahorcadito.css";

import base from "./images/base.png";
import cabeza from "./images/cabeza.png";
import cuerpo from "./images/cuerpo.png";

import brazoDerecho from "./images/brazo derecho.png";
import brazoIzquierdo from "./images/brazo izquierdo.png";

import piernaDerecha from "./images/pierna derecha.png";
import piernaIzquierda from "./images/pierna izquierda.png";

export default class Ahorcadito extends Component {
  constructor() {
    super();
    this.state = {
      palabras: ["palabra", "palabra2", "palabra3"],
      currentWordIndex: 0,
      currentImg: base,
      input: "",
      wordToShow: "",
    };
  }

  componentDidMount() {
    const temp = Math.floor(Math.random() * this.state.palabras.length);
    for (let i = 0; i < this.state.palabras[temp].length; i++) {
      this.state.wordToShow += " ";
    }

    this.setState({ currentWordIndex: temp });
  }

  render() {
    const replaceAt = (index, replacement, string) => {
      if (index >= string.length) {
        return string.valueOf();
      }
      return (
        string.substring(0, index) + replacement + string.substring(index + 1)
      );
    };

    const onClick = (e) => {
      let temp = this.state.wordToShow;
      for (let i = 0; i < this.state.palabras[this.state.currentWordIndex].length; i++) {
        if (
          this.state.input.charAt(i) ==
          this.state.palabras[this.state.currentWordIndex].charAt(i)
        ) {
          for (
            let j = 0;
            j < this.state.palabras[this.state.currentWordIndex].length;
            j++
          ) {
            console.log(temp);
            if (j == i) {
              temp = replaceAt(
                j,
                this.state.palabras[this.state.currentWordIndex].charAt(i),
                temp
              );
            }
          }
          console.log(temp);
          this.setState({ wordToShow: temp });
        }
        if (
          this.state.palabras[this.state.currentWordIndex] !=
          this.state.input.trim()
        ) {
          if (this.state.currentImg == base) {
            this.setState({ currentImg: cabeza });
          } else if (this.state.currentImg == cabeza) {
            this.setState({ currentImg: cuerpo });
          } else if (this.state.currentImg == cuerpo) {
            this.setState({ currentImg: brazoIzquierdo });
          } else if (this.state.currentImg == brazoIzquierdo) {
            this.setState({ currentImg: brazoDerecho });
          } else if (this.state.currentImg == brazoDerecho) {
            this.setState({ currentImg: piernaIzquierda });
          } else if (this.state.currentImg == piernaIzquierda) {
            this.setState({ currentImg: piernaDerecha });
          }
        }
      }
    };
    return (
      <div className="container-ahorcadito">
        <img src={this.state.currentImg} className="img-progress"></img>

        <div className="letras">
          {this.state.wordToShow.split("").map((i) => {
            return (
              <input
                className="letra"
                value={i}
                style={{ backgroud: "#fff" }}
                disabled
              />
            );
          })}
        </div>
          <input
            className="input-word"
            type="text"
            placeHolder="escriba acá una palabra"
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
          />
          <a
            type="submit"
            className="btn-check"
            onClick={(e) => {
              onClick(e);
            }}
          >
            Verificar
          </a>

      </div>
    );
  }
}
