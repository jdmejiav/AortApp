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
            <div className="texto-home">
            <div className="cuadro-texto2">
              <p>
              Esta página se diseñó como un método de estudio didáctico y divertido,
               donde los estudiantes puedan comprender, analizar, identificar y 
               conocer la función de cada una de las ramas de la aorta por su 
               propio medio, además de esto servirá como una alternativa extra 
               para que los docentes evalúen el conocimiento que han adquirido 
               los estudiantes a lo largo de las clases teórico-practicas, esto 
               con el fin de convertir todo el material de estudio en un mundo 
               lleno de aprendizaje dónde jugar y compartir con tus 
               compañeros te ayudará en tu vida académica.
              </p>
            </div>
            <div className="cuadro-texto2">
              <p>
              La aorta es la principal arteria del organismo. Se trata de un 
              vaso elástico de gran calibre, que da origen al resto de arterias
               de la circulación sistémica. A través de ella y de sus ramas se
                realiza el transporte de sangre oxigenada desde el corazón hasta 
                los diferentes órganos del cuerpo; Esta se divide en 3 partes, 
                aorta ascendente, arco aórtico y aorta descendente (Se divide en
                 aorta torácica y aorta abdominal). Esta primera porción de la 
                 aorta que se denomina aorta ascendente, sale del ventrículo 
                 izquierdo y se dirige hacia craneal (arriba y a lateral derecho 
                 (a la derecha). Continua con el arco aórtica o también conocido
                  como cayado aórtico, este se sitúa detrás del manubrio esternal,
                   girando hacia lateral izquierdo (a la izquierda) y hacia dorsal
                    (atrás), formando así un arco de convexidad superior, el cual 
                    rodea el bronquio principal izquierdo y desciende hacia caudal, 
                    junto con la columna vertebral hasta llegar a la altura del 
                    cuerpo de la 4ta vértebra torácica. Después de estas 2 partes 
                    viene la aorta descendente, que se divide en dos secciones, 
                    la aorta torácica descendente, la cual baja hasta el diafragma 
                    y atravesando por el orificio aórtico llega al abdomen, a 
                    partir de este punto se comienza a llamar aorta abdominal 
                    descendente, siguiendo por la columna vertebral hasta llegar 
                    al cuerpo de la 4ta vértebra lumbar.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
