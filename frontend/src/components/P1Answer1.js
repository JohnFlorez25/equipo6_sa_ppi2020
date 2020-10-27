import React from "react";
import { Link, withRouter } from "react-router-dom";
const P1Answer1 = (props) => {
  const { history } = props;
  return (
    <div className="P1Answer1">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Level 1</span>
        </nav>
      </header>
      <h3 className="Titulo">Procesos geológicos planetarios</h3>
      <div className="La tala ilegal de árboles">
        <strong>
          <p className="p1">
          Los procesos de la alimentación esta cañon son aquellos que tienen lugar en la superficie terrestre. Fundamentalmente son cuatro: meteorización, erosión, además transporte y por último sedimentación. La acción de estos tiende a destruir el relieve existente, llevar los materiales a zonas deprimidas y rellenar, con estos, dichas zonas con el fin de obtener una superficie homogénea o de equilibrio en donde su acción no sea necesaria al no existir relieve{" "}
          </p>
        </strong>

        <img className="Img1" src="./img/ciclo_tiera.jpg" alt="Img" />

        <center>
          <button
            type="submit"
            class="btn btn-success btn-lg"
            onClick={() => history.push("/CuestionarioN2")}
          >
            Continuar
          </button>
        </center>
      </div>
    </div>
  );
};

export default P1Answer1;
