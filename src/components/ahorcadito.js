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
      palabras: ["hepatica", "costocervical", "cuello"],
      currentWordIndex: 0,
      currentImg: base,
      input: "",
      wordToShow: "",
      hints: {
        hepatica: "Arteria que irriga el hígado",
        costocervical: "La arteria escapular dorsal de que tronco se origina?",
        cuello: "Uno de los territorios perfundidos por la arteria subclavia",
      },
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
      var flag = false;
      for (
        let i = 0;
        i < this.state.palabras[this.state.currentWordIndex].length;
        i++
      ) {
        if (
          this.state.input.charAt(i) ==
          this.state.palabras[this.state.currentWordIndex].charAt(i)
        ) {
          for (let j = 0 ; j < this.state.palabras[this.state.currentWordIndex].length ; j++
          ) {
            console.log(temp);
            if (j == i) {
              flag=true;
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
          this.state.input.trim() && !flag
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
        <div className="img-pistas">
          <img src={this.state.currentImg} className="img-progress"></img>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              width: "200px",
            }}
          >
            <h2 style={{ "padding-top": "50px" }}>Pista</h2>
            <p>
              {
                this.state.hints[
                  this.state.palabras[this.state.currentWordIndex]
                ]
              }
            </p>
          </div>
        </div>

        <div className="letras">
          {this.state.wordToShow.split("").map((i) => {
            return (
              <input
                className="letra"
                value={i.toUpperCase()}
                style={{ backgroud: "#fff" }}
                disabled
              />
            );
          })}
        </div>
        <input
          className="input-word"
          type="text"
          placeHolder="Escriba acá una palabra"
          onChange={(e) => {
            this.setState({ input: e.target.value.toLowerCase() });
          }}
        />
        <a
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
