import React from "react";
import Navbar from "../components/NavBarLog";
import "../styles/mestudio.css";
export default class MEstudio extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <ul className="list-texts">
            <li className="item-text">
              <h1 className="tittle">TRONCO BRAQUIOCEFALICO</h1>
              <p>
                Vasculariza miembros anteriores, del cuello, cabeza y región
                ventral del tórax. El tronco braquiocefálico origina la arteria
                subclavia izquierda y derecha.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. SUBCLAVIA</h1>
              <p>
                Irriga el cuello, miembro anterior, parte ventral y craneal del
                tórax, también irriga el cerebro a través de la arteria
                vertebral.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. AXILAR</h1>
              <p>
                Es la continuación de la arteria subclavia. Irriga el miembro
                torácico
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. CAROTIDA COMUN</h1>
              <p>
                Discurre por la región ventral del cuello, de la tráquea y unas
                cuantas ramas para el esófago, laringe y músculos anexos.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. SACRA MEDIA </h1>
              <p>
                Vascularización del cono medular, últimos ganglios espinales,
                músculos de la grupa, lumbares internos y sacrocaudales
                ventrales.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. Iliaca externa</h1>
              <p>
                Irrigación del miembro pelviano, da origen a la arteria
                circunfleja iliaca profunda, en el perro sale de la aorta. La
                izquierda irriga superficie ventral de los músculos psoas, mayor
                y menor La derecha cruza vena cava caudal
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. ILIACA INTERNA</h1>
              <p>
                Irriga órganos de la cavidad de la pelvis, pared de la cavidad,
                gluteos y al seguir su irrigación llega a los uréteres, vejiga,
                uretra, glándulas sexuales
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. CELIACA</h1>
              <p>
                A su lado izquierdo se relaciona con el estómago mientras que,
                en su lado derecho con el hígado, glándula adrenal y en su lado
                caudal con el lóbulo izquierdo del páncreas. La arteria celiaca
                da origen a la arteria gástrica izquierda, arteria hepática y
                arteria esplénica.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. MESENTERICA CRANEAL</h1>
              <p>
                Irriga el intestino, y mitad caudal del duodeno descendente
                hasta la parte craneal del colon descendente.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. MESENTERICA CAUDAL</h1>
              <p>
                Irriga porciones media y caudal del colon descendente, también
                porción craneal del recto
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">A. RENALES</h1>
              <p>
                Irriga los riñones. La arteria renal derecha es mas craneal,
                dividiéndose en ventral y dorsal.
              </p>
            </li>

            <li className="item-text">
              <h1 className="tittle">ARTERIA GONADAL</h1>
              <p>
                Macho(testiculares): Irriga el epidídimo, cordón espermático,
                testículo y conducto deferente Hembra(ováricas): irriga el
                ovario, ligamento ancho, bolsa ovárica, trompa uterina y cuerpo
                uterino
              </p>
            </li>

            <li className="item-text">
              <h1 className="tittle">ARTERIA CIRCUNFLEJA ILIACA PROFUNDA </h1>
              <p>
                Irriga los músculos psoas mayores y menores, transverso
                abdominal, oblicuo interno del abdomen.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
