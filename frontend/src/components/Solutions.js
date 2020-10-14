import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Soluciones.css";
const Solutions = (props) => {
  const { history } = props;
  return (
    <div className="Solutions">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Solutions</span>
        </nav>
      </header>

      <div className="Solutions">
        <strong>
          <p>
            Las mejores soluciones viables para aumentar el conocimiento del tema de los procesos geológicos en diversos planetas, es
          </p>
        </strong>
        <p>
          Mediante un aplicativo de software, desarrollar una aplicación que permita generar nuevo conocimiento a las personas que desconocen sobre este tema
        </p>
        <p>
          Mediante la concientización, lograr que las personas que puedan utilizar el aplicativo de software, puedan conocer de cómo actuar ante eventos geológicos, comúnmente los terremotos. Pero también, busca del cómo prevenirse ante otros eventos.
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

export default Solutions;
