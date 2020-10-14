import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Soluciones.css";
const Soluciones = (props) => {
  const { history } = props;
  return (
    <div className="Soluciones">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">SOLUCIONES</span>
        </nav>
      </header>

      <div className="Solucion">
        <strong>
          <p>
            Las mejores soluciones viables para evitar graves daños por la tala
            de árboles son:
          </p>
        </strong>
        <p>
          -Plantar árboles en zonas de ciudades para que colabores a parar la
          tala de árboles son con la oxigenación del aire para todos Programas y
          grupos ambientales para la ayuda y el desarrollo de la tala de árboles
          y recuperación de los bosques.
        </p>
        <p>
          - Tomar conciencia sobre las malas secuelas que deja ta tala de
          arboles Proteger los bosques y zonas verdes y así aplicar una gran
          importancia a la sociedad y convertirse en los pulmones verdes del
          planeta.
        </p>
        <img className="Img2" src="./img/Imagen2.png" alt="Img02" />

        <center><button
          type="button"
          class="btn3 btn-success btn-lg"
          onClick={() => history.push("/")}
        >
          Volver
        </button></center>
      </div>
    </div>
  );
};

export default Soluciones;
