import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op1cuestionarioN2_2.css";
const P1AnswerN2_L2 = (props) => {
const {history}=props;
  return (
    <div className="P1AnswerN2_L2">
      <center><h1 className="N2">Answer</h1></center>
      <p className="Pregunta1">
      ¿Cuál es la edad del planeta Tierra?
      </p>
      <button 
      type="button" 
      class="btn btn-danger btn-lg btn-block"
      onClick={() => history.push("/")}>
      526 millones de años
      </button>
      <button 
      type="button" 
      class="btn btn-danger btn-lg btn-block"
      onClick={() => history.push("/")}>
      2000 millones de años
      </button>
      <button 
      type="button" 
      class="btn btn-danger btn-lg btn-block"
      onClick={() => history.push("/")}>
      14000 millones de años
      </button>
      <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={() => history.push("/")}>
      4600 millones de años
      </button>
    </div>
  );
};

export default P1AnswerN2_L2;