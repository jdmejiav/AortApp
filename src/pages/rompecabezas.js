import React, { Component } from "react";
import NavBarLog from "../components/NavBarLog";
import { JigsawPuzzle } from "../components/index";
import base from "../components/images/axilar.jpeg";
import cabeza from "../components/images/celateral.jpeg";
import cuerpo from "../components/images/mesentrica.jpeg";
import brazoDerecho from "../components/images/ovarica.jpeg";
import { Link } from "react-router-dom";

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
      <div
        style={{
          height: "100vh",
          background: "rgb(187,195,204)",
          background:
            "linear-gradient(90deg, rgba(187,195,204,0.9976365546218487) 0%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 67%, rgba(95,221,229,1) 100%)",
        }}
      >
        <NavBarLog />
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
          }}
        >
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
                alert("Felicitaciones");
              }}
            />
          </div>
          {this.state.finished && (
            <Link className="btn-volver" to="/">
              Regresar
            </Link>
          )}
        </div>
      </div>
    );
  }
}
