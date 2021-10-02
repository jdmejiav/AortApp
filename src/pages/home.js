import React from "react";
import NavBarLog from "../components/NavBarLog";
import "../styles/home.css";
import home from "../components/images/home.png";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBarLog />

        <div className="container-home">
          <div className="contenedor-imagen center">
            <img src={home}></img>
          </div>
          <div className="texto-home">
            <div className="cuadro-texto">
              <div className="titulo">
                <h1>Objetivo:</h1>
              </div>

              <p>
                Se diseño esta pagina como un método de estudio didáctico y
                divertido, donde los estudiantes puedan comprender, analizar,
                identificar y saber la función de cada una de las ramas de la
                aorta por su propio medio, además de fortalecer los
                conocimientos previos dado por los docentes, esto con el fin de
                convertir todo el material de estudio en un mundo lleno de
                aprendizaje dónde jugar y compartir con tus compañeros te
                ayudará en tu vida académica.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
