import React from "react";
import { Link, withRouter } from "react-router-dom";
const P1AnswerN2_L1 = (props) => {
  const { history } = props;
  return (
    <div className="P1AnswerN2_L1">
      <center>
        <h1 className="N2">Answer</h1>
      </center>
      <p className="Pregunta1">¿Cuál es la presión en Júpiter?</p>
      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        100.000 bares
      </button>
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        545.865 bares
      </button>
      <button
        type="button"
        class="btn btn-info btn-lg btn-block"
        onClick={() => history.push("/P1AnswerN2_L2")}
      >
        1.000.000 de bares
      </button>
      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        10.000 bares
      </button>
    </div>
  );
};

export default P1AnswerN2_L1;
