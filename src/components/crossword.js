import React, { Component } from "react";

import Crossword from "@jaredreisinger/react-crossword";
import "./crossword.css";

const data = {
  down: {
    1: {
      clue: "Útilma ramificación del cayado aórtico, Arteria (9 Letras)",
      answer: "SUBCLAVIA",
      row: 0,
      col: 7,
    },
    2: {
      clue: "Nombre de la porción craneal de la aorta (6 Letras)",
      answer: "CAYADO",
      row: 0,
      col: 9,
    },
    4: {
      clue: "En perros se origina la arteria principal como subclavia (9 Letras)",
      answer: "IZQUIERDA",
      row: 7,
      col: 5,
    },
    6: {
      clue: "La aorta se origina en la base del ventrículo (11 Letras)",
      answer: "ADVENTICIA",
      row: 11,
      col: 3,
    },
  },
  across: {
    3: {
      clue: "Nombre de la porción por cual la aorta cruza por el diafragma (5 Letras)",
      answer: "HIATO",
      row: 5,
      col: 5,
    },
    4: {
      clue: "Últimas arterias (ramificación) de la aorta (7 Letras)",
      answer: "ILIACAS",
      row: 7,
      col: 5,
    },
    7: {
      clue: "La aorta cuenta con 6 capas, ¿Cuál es el nombre de la capa que se ubica en el interior? (9 Letras)",
      answer: "ENDOTELIO",
      row: 14,
      col: 3,
    },
    8: {
      clue: "La primera ramificación del arco aórtico es el tronco (16 Letras)",
      answer: "BRAQUIOCEFALICO",
      row: 21,
      col: 1,
    },
  },
};

export default class CrosswordComponent extends Component {
  constructor() {
    super();
    this.state = {
      terminado: true,
    };
  }

  render() {
    var estado = false;
    return (
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          justifyContent: "center",
        }}
      >
        <div className="container-crossword">
          <Crossword
            useStorage={false}
            theme={{
              gridBackground: "#fff",
              cellBackground: "#fff",
              cellBorder: "#000",
              textColor: "#000",
              numberColor: "#000",
              focusBackground: "#38B1E8",
              highlightBackground: "#38B1E8",
            }}
            data={data}
            ocCorrect={(e) => {
              {
                console.log("se imprime algo del correct");
              }
            }}
            onCrosswordCorrect={(e) => {
              {
                if (e == true) {
                  estado = true;
                } else {
                  estado = false;
                }
              }
            }}
          />

          {this.state.terminado ? (
            <a
              className="btn-checkear"
              onClick={() => {
                if (estado) {
                  alert("felicitaciones");
                  this.setState({ terminado: true });
                } else {
                  alert("Aún no has acabado");
                }
              }}
            >
              verificar
            </a>
          ) : (
            <a className="btn-regresar-home" href="/">
              Regresar
            </a>
          )}
        </div>
      </div>
    );
  }
}
