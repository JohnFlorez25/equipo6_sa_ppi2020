import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Op2NivelCausas.css";
const Op2NivelCausas = (props) => {
  const { history } = props;
  return (
    <div className="Op2NivelCausas">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Level 1</span>
        </nav>
      </header>
      <h3 className="Titulo">Información</h3>
      <div className="Información">
        <strong>
          <p className="p1">
            Los planetas y sus procesos geológicos que se abordarán serán los siguientes:{" "}
          </p>
        </strong>
        <p>Marte, el planeta rojo, que ha sido bastante estudiado.</p>
        <p>Tierra, el planeta al cual pertenecemos, ha sido muy bien estudiada su geología planetaria.</p>
        <p>Venus, el planeta más caliente del sistema solar, considerado infernal, no ha sido muy estudiado, pero hay información muy interesante</p>
        <p>Júpiter, un planeta al cual sólo es posible estudiar la capa más externa de su atmósfera. Pero se conocen ciertos datos de su geología</p>
        <p>Saturno, un planeta más pequeño, pero similar al anterior, no tiene una geología muy estudiada, pero si se conocen ciertos datos interesantes</p>
        <p>Mercurio, un planeta rocoso, el más cercano al sol, no se tienen muchos datos sobre su geología, pero tiene ciertos puntos de interés</p>
        <p>Urano, un planeta bastante misterioso, pero que tiene unos cuantos datos interesantes en cuanto a cómo es su interior, su atmósfera, entre otros datos</p>
        <p>Neptuno, un planeta bastante misterioso, pero similar al anterior, aunque no con muchas diferencias, y con datos interesantes de su atmósfera, su interior, su geología, entre otros datos</p>
        <p>Plutón, el planeta más distante de todos, el más pequeño, es demasiado frío, casi llegando al bajo cero, tiene una geología muy poco estudiada, pero posee datos interesantes sobre su atmósfera, la rareza de su interior, entre otros datos</p>
        <p>Se abordarán también el conocimiento que se tenga de exoplanetas, es decir, que no pertenecen al sistema solar. Pero que, según las observaciones y suposiciones de los astrónomos, pueden poseer características muy interesantes</p>

        <img className="Img5" src="./img/Actualidad_372724206_113638334_1706x960.jpg" alt="Img" />

        <center>
          <button
            type="submit"
            class="btn1 btn- btn-lg"
            onClick={() => history.push("/AnswerL2")}
          >
            Continuar
          </button>
        </center>
      </div>
    </div>
  );
};

export default Op2NivelCausas;
