import React, { Component } from "react";
import { Wheel } from "react-custom-roulette";
import { Redirect, Link } from "react-router-dom";
import NavBarLog from "../components/NavBarLog";
import "../styles/roulette.css";

const routes = ["/ahorcadito", "/card", "/crossword", "/jigsaw", "/wordsearch"];

const data = [
  {
    option: "Ahorcadito",
    style: {
      backgroundColor: "#AD8155",
      textColor: "black",
    },
  },
  {
    option: "pares",
    style: {
      backgroundColor: "#FFD7B0",
      textColor: "black",
    },
  },
  {
    option: "Crucigrama",
    style: {
      backgroundColor: "#FAC794",
      textColor: "black",
    },
  },
  {
    option: "Rompecabezas",
    style: {
      backgroundColor: "#4494AD",
      textColor: "black",
    },
  },
  {
    option: "Sopa de letras",
    style: {
      backgroundColor: "#65A7B3",
      textColor: "black",
    },
  },
];

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      mustSprint: false,
      prize: 0,
      inicio: true,
    };
  }

  render() {
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      this.setState({ prize: newPrizeNumber });
      this.setState({ mustSprint: true });
    };

    const handleRedirect = () => {
      return <Redirect to={routes[this.state.prize]} />;
    };

    return (
      <div>
        <NavBarLog />
        <div className="home-container">
          <Wheel
            mustStartSpinning={this.state.mustSprint}
            prizeNumber={this.state.prize}
            data={data}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            innerBorderWidth={5}
            outerBorderWidth={0}
            radiusLineWidth={0}
            onStopSpinning={(e) => {
              this.setState({ inicio: false });
              console.log(data[this.state.prize]);
            }}
          />

          {this.state.inicio ? (
            <a className="btn-spin" onClick={handleSpinClick}>
              Jugar
            </a>
          ) : (
            <Link className="btn-ir" to={routes[this.state.prize]}>
              Ir a juego
            </Link>
          )}
        </div>
      </div>
    );
  }
}
