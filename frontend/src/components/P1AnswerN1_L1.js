import React from "react";
import { Link, withRouter } from "react-router-dom";
const P1AnswerN1_L1 = (props) => {
  const { history } = props;
  return (
    <div className="P1AnswerN1_L1">
      <center>
        <h1 className="N2">Answer</h1>
      </center>
      <p className="Pregunta1">
        ¿Cómo acontece un terremoto en el interior de la Tierra?
      </p>
      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Tres placas chocan entre sí, acumulando una gran cantidad de energía,
        cuando hay mucha energía o tensión, se libera, produciendo un terremoto
      </button>
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        onClick={() => history.push("/P1AnswerN1_L2")}
      >
        Dos placas chocan, se acumula una gran cantidad de energía, cuando esa
        energía se libera, se produce un terremoto
      </button>
      <button
        type="button"
        class="btn btn-info btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Dos placas chocan entre sí, se acumula una baja cantidad de energía,
        debido a la fricción y temperatura de las placas, acontece un terremoto
      </button>
      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        onClick={() => history.push("/")}
      >
        Una placa crea una gran fricción con la superficie adyacente del
        interior de la Tierra, ésta al tener un roce tan fuerte, debe liberar la
        energía de una forma, liberándola en forma de terremoto
      </button>
    </div>
  );
};

export default P1AnswerN1_L1;
