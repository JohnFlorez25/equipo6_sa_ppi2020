import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op2cuestionarioN2_1.css";
const Op2cuestionarioN2_1 = (props) => {
const {history}=props;
  return (
    <div className="Op2cuestionarioN2_1">
      <center><h1>CUESTIONARIO</h1></center>
      <p className="Pregunta2">     
      ¿Cuál es una de las consecuencias de la tala ilegal de árboles?
      </p>
      <button 
      type="button" 
      class="btn btn-info btn-lg btn-block"
      onClick={() => history.push("/")}>
      Falta de alimento
      </button>
      <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={() => history.push("/")}>
      Sembrar
      </button>
      <button 
      type="button" 
      class="btn btn-warning btn-lg btn-block"
      onClick={() => history.push("/")}>
      Los animales
      </button>
      <button 
      type="button" 
      class="btn btn-primary btn-lg btn-block"
      onClick={() => history.push("/*")}>
      La desaparición de zonas
      </button>
    </div>
  );
};

export default Op2cuestionarioN2_1;