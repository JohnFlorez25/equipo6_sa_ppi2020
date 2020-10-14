import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op1cuestionarioN1_2.css";
const P1AnswerN1_L2 = (props) => {
const {history}=props;
  return (
    <div className="P1AnswerN1_L2">
      <center><h1 className="N2">Answer</h1></center>
      <p className="Pregunta1">
      ¿Cómo es la lluvia en Venus?
      </p>
      <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={() => history.push("/")}>
      La lluvia es de ácido sulfúrico, con una combinación de plomo y azufre
      </button>
      <button 
      type="button" 
      class="btn btn-danger btn-lg btn-block"
      onClick={() => history.push("/")}>
      La lluvia está constituida por hierro, debido a las elevadas temperaturas del planeta
      </button>
      <button 
      type="button" 
      class="btn btn-info btn-lg btn-block"
      onClick={() => history.push("/")}>
      La lluvia está constituida por Metano, un líquido abundante en este planeta infernal
      </button>
      <button 
      type="button" 
      class="btn btn-warning btn-lg btn-block"
      onClick={() => history.push("/")}>
      La lluvia es de diamantes, debido a la alta presión y temperatura de este planeta
      </button>
    </div>
  );
};

export default P1AnswerN1_L2;