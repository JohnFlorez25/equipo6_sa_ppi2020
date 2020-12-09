import React from "react";
import { Link, withRouter } from "react-router-dom";
const P1Doubs = (props) => {
  const { history } = props;
  return (
    <div className="Op2cuestionarioN1_1">
      <center>
        <h1 className="N2">Answer</h1>
      </center>
      <p className="Pregunta1">
        ¿Cuál es el planeta interior más hostil del Sistema Solar
      </p>
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        onClick={() => history.push("/Menu1")}
      >
        Venus
      </button>
      <button
        type="button"
        class="btn btn-danger btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Mercurio
      </button>
      <button
        type="button"
        class="btn btn-info btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Marte
      </button>
      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Tierra
      </button>
    </div>
  );
};

export default P1Doubs;
