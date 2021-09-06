import React, { Component } from "react";
import NavBarLog from "../components/NavBar";
import { JigsawPuzzle } from "../components/index";
import base from "../components/images/axilar.jpeg";
import cabeza from "../components/images/celateral.jpeg";
import cuerpo from "../components/images/mesentrica.jpeg";
import brazoDerecho from "../components/images/ovarica.jpeg";
import {Link} from "react-router-dom"

export default class Rompecabezas extends Component {
  constructor() {
    super();
    this.state = {
      imagenes: [base, cabeza, cuerpo, brazoDerecho],
      index: 0,
      finished: false,
    };
  }

  componentDidMount() {
    this.setState({
      index: Math.floor(Math.random() * this.state.imagenes.length),
    });
  }
  render() {
    return (
      <div>
        <NavBarLog />
        <div style={{
          "display":"flex",
          "flex-direction":"column",
          "align-items":"center"

        }}>
          <div
            style={{
              margin: "60px",
              "border-color": "#000 !important",
              "background-color": "#fff",
              "border-style": "solid",
            }}
          >
            <JigsawPuzzle
              imageSrc={this.state.imagenes[this.state.index]}
              rows={4}
              columns={4}

              onSolved={() => {
                this.setState({ finished: true });
              }}
            />
          </div>
          {this.state.finished && <Link className="btn-volver" to="/">Regresar</Link>}
        </div>
      </div>
    );
  }
}
