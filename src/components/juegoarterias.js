import React, { Component } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import img from "./images/arterias.png";
import "./juegoarterias.css";
export default class JuegoArterias extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { value: 1, label: "Tronco Branquiocefálico" },
        { value: 2, label: "Arco Aórtico" },
        { value: 3, label: "Diafragma" },
        { value: 4, label: "Arteria Abdominal" },
        { value: 5, label: "Arteria Mesentérica Caudal" },
        { value: 6, label: "Arteria Sacial Mediana" },
        { value: 7, label: "Arteria Iliaca Interna izquierda" },
        { value: 8, label: "Arteria Iliaca Externa izquierda" },
        { value: 9, label: "Arteria Renal Izquierda" },
        { value: 10, label: "Arteria Meséntrica cranial" },
        { value: 11, label: "Arteria Subclavia" },
        { value: 12, label: "Arteria Braquial" },
        { value: 13, label: "Arteria Axilar" },
        { value: 14, label: "Arteria Carótida común Izquierda" },
      ],
      styles: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      states: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }
  z;

  componentDidMount() {
    for (let i = this.state.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.state.options[j];
      this.state.options[j] = this.state.options[i];
      this.state.options[i] = temp;
    }
  }

  render() {
    const onChangeEvent = (e, idx) => {
      if (idx == e.value) {
        console.log(idx == e.value);
        this.state.states[idx - 1] = 1;
        console.log(this.state.states);
      }
    };
    const onClick = () => {
      for (let i = 0; i < this.state.states.length; i++) {
        if (this.state.states[i] == 1) {
          const temp = this.state.styles;
          temp[i] = { "background-color": "#DAF5E7" };
          this.setState({ styles: temp });
        } else {
          const temp = this.state.styles;
          temp[i] = { "background-color": "#FFC4C4" };
          this.setState({ styles: temp });
        }
      }
    };
    return (
      <div className="center padding-top margin-bottom">
        <ul class="juego-arteria">
          <li class="imagen">
            <img src={img}></img>
          </li>
          <ul class="grid-items">
            <li class="item" style={this.state.styles[0]}>
              <span>1:</span>
              <Select style={this.state.styles[0]}
                onChange={(e) => {
                  onChangeEvent(e, 1);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[1]}>
              <span>2:</span>
              <Select style={this.state.styles[1]}
                onChange={(e) => {
                  onChangeEvent(e, 2);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[2]}>
              <span>3:</span>
              <Select style={this.state.styles[2]}
                onChange={(e) => {
                  onChangeEvent(e, 3);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[3]}>
              <span>4:</span>
              <Select style={this.state.styles[3]}
                onChange={(e) => {
                  onChangeEvent(e, 4);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[4]}>
              <span>5:</span>
              <Select style={this.state.styles[4]}
                onChange={(e) => {
                  onChangeEvent(e, 5);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[5]}>
              <span>6:</span>
              <Select style={this.state.styles[5]}
                onChange={(e) => {
                  onChangeEvent(e, 6);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[6]}>
              <span>7:</span>
              <Select style={this.state.styles[6]}
                onChange={(e) => {
                  onChangeEvent(e, 7);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[7]}>
              <span>8:</span>
              <Select style={this.state.styles[7]}
                onChange={(e) => {
                  onChangeEvent(e, 8);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[8]}>
              <span>9:</span>
              <Select style={this.state.styles[8]}
                onChange={(e) => {
                  onChangeEvent(e, 9);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[9]}>
              <span>10:</span>
              <Select style={this.state.styles[9]}
                onChange={(e) => {
                  onChangeEvent(e, 10);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[10]}>
              <span>11:</span>
              <Select style={this.state.styles[10]}
                onChange={(e) => {
                  onChangeEvent(e, 11);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[11]}>
              <span>12:</span>
              <Select style={this.state.styles[11]}
                onChange={(e) => {
                  onChangeEvent(e, 12);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[12]}>
              <span>13:</span>
              <Select style={this.state.styles[12]}
                onChange={(e) => {
                  onChangeEvent(e, 13);
                }}
                options={this.state.options}
              />
            </li>
            <li class="item" style={this.state.styles[13]}>
              <span>14:</span>
              <Select style={this.state.styles[13]}
                onChange={(e) => {
                  onChangeEvent(e, 14);
                }}
                options={this.state.options}
              />
            </li>
          </ul>
            <div className="center btn-check-container">
              <Link onClick={onClick} className="btn-check">
                Verificar
              </Link>
            </div>
          
        </ul>
      </div>
    );
  }
}
