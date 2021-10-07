import React, { Component } from "react";
import Navbar from "../components/NavBarLog";
import "../styles/referencias.css"
export default class References extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
            
          <ul className="list-citas">
            <li className="center padding-top"><h1>Referencias </h1></li>
            
            <li className="cita">
              Andreu LS. [Online].; 2019 [cited 2021 Octubre 02. Available from:<br/>
              <a href="https://core.ac.uk/download/pdf/290000286.pdf">
                https://core.ac.uk/download/pdf/290000286.pdf.
              </a>
            </li>
            <li className="cita">
              Merck & Co. I,KNEU. MSD y el Manual veterinario de MSD. [Online].;
              2018 [cited 2021 Octubre 02. Available from:<br/>
              <a href="https://www.msdvetmanual.com/dog-owners/heart-and-blood-vessel-disorders-of-dogs/introduction-to-heart-and-blood-vessel-disorders-in-dogs">
                https://www.msdvetmanual.com/dog-owners/heart-and-blood-vessel-disorders-of-dogs/introduction-to-heart-and-blood-vessel-disorders-in-dogs
              </a>
            </li>
            <li className="cita">
              KÖnig. TOMO 2 ORGANOS, SISTEMA NERVIOSO Y CIRCULATORIO. 2nd ed.
              BUENOS AIRES- BOGOTÁ- CARACAS- MADRID- MÉXICO- SAO PAULO:
              Editorial Medica Panamericana.
            </li>
            <li className="cita">
              Dieter Budras K, McCarthy PH, Fricke W, Richter R. Anatomy of the
              dog. Fifth-revised edition ed. Budras PDKD, editor.
              Frankfurt-Alemania: Dr. Silke Buda, Institut für
              Veterinär-Anatomie, Freie Universität Berlin; 2007.
            </li>

            <li className="cita">
              Quivera A, Rangel , Zambrano F, Martinez J. [slideshare].; 2015
              [cited 2021 JUNIO 14. Available from:<br/>
              <a href="https://es.slideshare.net/AstreaQr/aorta-abdominal-de-canino">
                https://es.slideshare.net/AstreaQr/aorta-abdominal-de-canino
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
