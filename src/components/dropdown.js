import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <Link className="nav-links" onClick={this.showMenu}>
          Juegos <i class="fas fa-caret-down"></i>
        </Link>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <Link to="/crossword"> Crucigrama </Link>
            <Link to="/wordsearch"> Sopa de letras </Link>
            <Link to="/ahorcadito"> Ahorcadito </Link>
            <Link to="/juegoarterias"> Nombrar Arterias </Link>
            <Link to="/card"> Encuentra los pares </Link>
            <Link to="/jigsaw"> Rempecabezas </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
