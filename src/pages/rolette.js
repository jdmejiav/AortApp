import React, { Component } from "react";
import { Wheel } from "react-custom-roulette";
import NavBar from "../components/NavBar";

const data = [
  {
    option: "Ahorcadito",
    style: {
      backgroundColor: "#AD8155",
      textColor: "black",
    },
  },
  {
    option: "Encuentra los pares",
    style: {
      backgroundColor: "##FFD7B0",
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
      inicio: false,
    };
  }

  render() {
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      this.setState({ prize: newPrizeNumber });
      this.setState({ mustSprint: true });
    };
    return (
      <div>
        <NavBar />
        <Wheel
          mustStartSpinning={this.state.mustSprint}
          prizeNumber={this.state.prize}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={(e) => {
            console.log(data[this.state.prize]);
          }}
        />

        {this.state.inicio ? (
          <button onClick={handleSpinClick}>SPIN</button>
        ) : (
          <button onClick={handleSpinClick}>Ir a juego</button>
        )}
      </div>
    );
  }
}
