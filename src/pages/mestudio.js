import React from "react";
import Navbar from "../components/NavBarLog";
import "../styles/mestudio.css";

import aaxilar from "../components/images/aaxilar.png";
import arenales from "../components/images/arenales.png";
import asubclavia from "../components/images/asubclavia.png";
import diafragma from "../components/images/diafragma.png";
import uiliaca from "../components/images/uiliaca.png";

import aaxilar2 from "../components/images/aaxilarcontinuaciondelasubclavia.png";
import acarotidacomun from "../components/images/acarotidacomun.png";
import aceliaca from "../components/images/aceliaca.png";
import acircunflejailiacaprofunda from "../components/images/acircunflejailiacaprofunda.png";
import agonadal1 from "../components/images/agonadal1.png";
import agonadal2 from "../components/images/agonadal2.png";
import ailiacainternaexterna from "../components/images/ailiacainternaexterna.png";
import amesentericacaudal from "../components/images/amesentericacaudal.png";
import amesentericacraneal from "../components/images/amesentericacraneal.png";
import arenal from "../components/images/arenal2.png";

export default class MEstudio extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "rgb(247,225,243)",
          background:
            " linear-gradient(0deg, rgba(247,225,243,1) 5%, rgba(151,214,240,1) 69%, rgba(154,192,255,1) 100%)",
        }}
      >
        <Navbar></Navbar>
        <div>
          <ul className="list-texts">
            <li className="item-text">
              <h1 className="tittle">Tronco Branquiocefálico</h1>
              <p>
                Vasculariza miembros anteriores, del cuello, cabeza y región
                ventral del tórax. El tronco braquiocefálico origina la arteria
                subclavia izquierda y derecha.
              </p>

              <h3>Arteria Carótida común</h3>
              <p>
                Discurre por la región ventral del cuello, de la tráquea y unas
                cuantas ramas para el esófago, laringe y músculos anexos.
              </p>
              <div className="center">
                <img className="img-mestudio" src={acarotidacomun}></img>
              </div>
              <p className="center">
                A. Carótida común . Imagen tomada de (Popesko, 1998)
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Subclavia Izquierda</h1>
              <p>
                Irriga el cuello, miembro anterior, parte ventral y craneal del
                tórax, también irriga el cerebro a través de la arteria
                vertebral.
              </p>
              <h3>Arteria Axilar</h3>
              <p>
                Es la continuación de la arteria subclavia. Irriga el miembro
                torácico
              </p>
              <div className="center">
                <img className="img-mestudio" src={aaxilar2}></img>
              </div>

              <p className="center">
                A. Axilar, continuación de la subclavia. Imagen tomada de
                anatomy dog-budras
              </p>
            </li>

            <li className="item-text">
              <h1 className="tittle">Arteria Sacra media</h1>
              <p>
                Vascularización del cono medular, últimos ganglios espinales,
                músculos de la grupa, lumbares internos y sacrocaudales
                ventrales.
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Iliaca externa</h1>
              <p>
                Irrigación del miembro pelviano, da origen a la arteria
                circunfleja iliaca profunda, en el perro sale de la aorta. La
                izquierda irriga superficie ventral de los músculos psoas, mayor
                y menor La derecha cruza vena cava caudal
              </p>

              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={ailiacainternaexterna}
                ></img>
              </div>
              <p className="center">
                A. Ilíaca interna- externa. Imagen tomada de Konig tomo 2
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Iliaca interna</h1>
              <p>
                Irriga órganos de la cavidad de la pelvis, pared de la cavidad,
                gluteos y al seguir su irrigación llega a los uréteres, vejiga,
                uretra, glándulas sexuales
              </p>

              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={ailiacainternaexterna}
                ></img>
              </div>
              <p className="center">
                A. Ilíaca interna- externa. Imagen tomada de Konig tomo 2
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Celiaca</h1>
              <p>
                A su lado izquierdo se relaciona con el estómago mientras que,
                en su lado derecho con el hígado, glándula adrenal y en su lado
                caudal con el lóbulo izquierdo del páncreas. La arteria celiaca
                da origen a la arteria gástrica izquierda, arteria hepática y
                arteria esplénica.
              </p>

              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={aceliaca}
                ></img>
              </div>
              <p className="center">
                A. Celíaca. Imagen tomada de https://cutt.ly/JEX453D
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Meséntrica Craneal</h1>
              <p>
                Irriga el intestino, y mitad caudal del duodeno descendente
                hasta la parte craneal del colon descendente.
              </p>
              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={amesentericacraneal}
                ></img>
              </div>
              <p className="center">
                A. Mesentérica craneal. Imagen tomada de https://cutt.ly/YEX7Sus
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Meséntrica Caudal</h1>
              <p>
                Irriga porciones media y caudal del colon descendente, también
                porción craneal del recto
              </p>
              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={amesentericacaudal}
                ></img>
              </div>
              <p className="center">
                A. Mesentérica caudal. Imagen toma de https://anato.cl/
              </p>
            </li>
            <li className="item-text">
              <h1 className="tittle">Arteria Renal</h1>
              <p>
                Irriga los riñones. La arteria renal derecha es mas craneal,
                dividiéndose en ventral y dorsal.
              </p>

              <div className="center">
                <img className="img-container img-mestudio2" src={arenal}></img>
              </div>
              <p className="center">A. renal. tomada de anatomy dog-budras</p>
            </li>

            <li className="item-text">
              <h1 className="tittle">Arteria Gonadal</h1>
              <p>
                Macho(testiculares): Irriga el epidídimo, cordón espermático,
                testículo y conducto deferente Hembra(ováricas): irriga el
                ovario, ligamento ancho, bolsa ovárica, trompa uterina y cuerpo
                uterino
              </p>

              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={agonadal1}
                ></img>
              </div>

              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={agonadal2}
                ></img>
              </div>
              <p className="center">
                A. Gonadales. imágenes tomadas de Anatomy dog-budras
              </p>
            </li>

            <li className="item-text">
              <h1 className="tittle">Arteria Circunfleja illiaca profunda</h1>
              <p>
                Irriga los músculos psoas mayores y menores, transverso
                abdominal, oblicuo interno del abdomen.
              </p>
              <div className="center">
                <img
                  className="img-container img-mestudio2"
                  src={acircunflejailiacaprofunda}
                ></img>
              </div>
              <p className="center">
                A. Circunfleja ilíaca profunda. Imagen tomada de
                https://cutt.ly/UEVqAEW
              </p>
            </li>
          </ul>

          <div className="center">
            <h1 className="tittle">
              Estas son algunas de las imágenes que encontrarás en el
              laboratorio de anatomía:
            </h1>
          </div>

          <ul className="list-img">
            <li className="item-img">
              <div className="center">
                <h1 className="tittle">Arteria Axilar</h1>
              </div>

              <div className="center">
                <img className="img-container" src={aaxilar}></img>
              </div>
            </li>
            <li className="item-img">
              <div className="center">
                <h1 className="tittle">Arterias Renales</h1>
              </div>

              <div className="center">
                <img className="img-container" src={arenales}></img>
              </div>
            </li>
            <li className="item-img">
              <div className="center">
                <h1 className="tittle">Arteria Subclavia</h1>
              </div>

              <div className="center">
                <img className="img-container" src={asubclavia}></img>
              </div>
            </li>
            <li className="item-img">
              <div className="center">
                <h1 className="tittle">Hiato Aórtico</h1>
              </div>

              <div className="center">
                <img className="img-container" src={diafragma}></img>
              </div>
            </li>
            <li className="item-img">
              <div className="center">
                <h1 className="tittle">Unión Iliaca</h1>
              </div>

              <div className="center">
                <img className="img-container" src={uiliaca}></img>
              </div>
            </li>


          </ul>
        </div>
      </div>
    );
  }
}
