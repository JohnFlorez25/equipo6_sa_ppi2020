import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op2cuestionarioN1_1.css";
const Op2cuestionarioN1_1 = (props) => {
const {history}=props;
  return (
    <div className="Op2cuestionarioN1_1">
      <center><h1 className="N2">CUESTIONARIO</h1></center>
      <p className="Pregunta1">
      ¿Cuál es una de las causas de la tala ilegal de árboles?
      </p>
      <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={() => history.push("/")}>
      Cultivos
      </button>
      <button 
      type="button" 
      class="btn btn-danger btn-lg btn-block"
      onClick={() => history.push("/OpNivel2")}>
      Tala excesiva
      </button>
      <button 
      type="button" 
      class="btn btn-info btn-lg btn-block"
      onClick={() => history.push("/")}>
      Exceso de madera
      </button>
      <button 
      type="button" 
      class="btn btn-warning btn-lg btn-block"
      onClick={() => history.push("/")}>
      La tala ilegal
      </button>
    </div>
  );
};

export default Op2cuestionarioN1_1;