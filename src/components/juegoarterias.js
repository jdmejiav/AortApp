import React, { Component } from "react";
import Select from "react-select";
import img from "./images/arterias.png";
import "./juegoarterias.css";
export default class JuegoArterias extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { value: "1", label: "Tronco Branquiocefálico" },
        { value: "2", label: "Arco Aórtico" },
        { value: "3", label: "Diafragma" },
        { value: "4", label: "Arteria Abdominal" },
        { value: "5", label: "Arteria Mesentérica Caudal" },
        { value: "6", label: "Arteria Sacial Mediana" },
        { value: "7", label: "Arteria Iliaca Interna izquierda" },
        { value: "8", label: "Arteria Iliaca Externa izquierda" },
        { value: "9", label: "Arteria Renal Izquierda" },
        { value: "10", label: "Arteria Meséntrica cranial" },
        { value: "11", label: "Arteria Subclavia" },
        { value: "12", label: "Arteria Braquial" },
        { value: "13", label: "Arteria Axilar" },
        { value: "14", label: "Arteria Carótida común Izquierda" },
      ],
    };
  }

  render() {
    const onChangeEvent = (e) => {};

    return (
      <div className="center padding-top margin-bottom">
        <ul class="lista-juego">
          <li class="imagen">
            <img src={img}></img>
          </li>
          <li class="item">
            <span>1:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>2:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>3:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>4:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>5:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>6:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
            <span>7:</span>
            <Select onChange={onChangeEvent} options={this.state.options} />
          </li>
          <li class="item">
          <span>8:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>9:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>10:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>11:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>12:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>13:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
          <li class="item">
          <span>14:</span>
            <Select
              onChange={onChangeEvent}
              options={this.state.options}
            />
          </li>
        </ul>
      </div>
    );
  }
}
