import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Introduccion.css";
const Introduction = (props) => {
  const {history}=props;
  return (
    <div className="Introduction">
    <img className="Welcome" src="./img/astronauta-dibujos-animados-nave-espacial-sobre-fondo-espacio-estrellado-brillante_68708-779.jpg" alt="Welcome" />

    <div class="card">
      <h5 class="card-header">Arley Quintero</h5>
      <div class="card-body">
        <h5 class="card-title">Introduction</h5>
        <p class="card-text">
        ELTIEMPO GEOLÓGICO

Se calcula que la edad de nuestro planeta es de 4600 millones de años. Hay un larguísimo
camino desde su origen en la gran explosión del big-bang hasta hoy en día. Sería fantástico
conocer toda esa historia, pero lo cierto es que hay grandísimos lapsus de conocimiento.
Los 3500 primeros millones de años de la historia de la Tierra pueden ser considerados, en
cierta medida, como parte de la historia del sistema solar y del universo. Desde el punto de
vista de la “Geología” en sentido estricto son casi una incógnita. Sabemos una mínima
parte de lo que ocurrió en los 460 millones de años siguientes, cuando la atmósfera ya era
oxigenada como la de hoy en día si no seguimos contaminándola. Los últimos 540
millones de años de la historia de la Tierra son los mejor conocidos relativamente.
        </p>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Aceptar
          </label>
        </div>
        <button
          type="submit"
          class="btn1 btn-secondary btn-lg"
          onClick={() => history.push("/Menu")}>
          Continuar
        </button>
      </div>
    </div>
    </div>
    );
  };

  export default Introduction;