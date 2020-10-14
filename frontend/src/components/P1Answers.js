import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op2cuestionarioN2_1.css";
const P1Answers = (props) => {
const {history}=props;
  return (
    <div className="P1Answers">
      <center><h1>Answer</h1></center>
      <p className="P1Answers">     
      ¿Cuáles son ejemplos de catástrofes geológicas?
      </p>
      <button 
      type="button" 
      class="btn btn-info btn-lg btn-block"
      onClick={() => history.push("/")}>
      Deforestación, caza de animales y derrumbamiento de tierras por mano del hombre
      </button>
      <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={() => history.push("/")}>
      Terremotos, tsunamis, erupciones volcánicas, entre otros
      </button>
      <button 
      type="button" 
      class="btn btn-warning btn-lg btn-block"
      onClick={() => history.push("/")}>
      Contaminación de las aguas, los océanos y la muerte de seres marinos
      </button>
      <button 
      type="button" 
      class="btn btn-primary btn-lg btn-block"
      onClick={() => history.push("/*")}>
      Oxidación de elementos metálicos, objetos vibratorios y calidad de los elementos
      </button>
    </div>
  );
};

export default P1Answers;