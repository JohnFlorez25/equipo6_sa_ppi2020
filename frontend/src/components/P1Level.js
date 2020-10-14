import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Op2Nivel2.css";
const Op2Nivel2 = (props) => {
const {history}=props;
  return (
    <div className="Op2Nivel2">
      <header>
      <nav className="navbar navbar-light bg-light">
   <span className="navbar-brand mb-0 h1">NIVEL 2</span>
  </nav>  
    </header>
      <h3 className="Titulo">
      Consecuencias
      </h3>
      <div className="Consecuencias">
      <strong><p>Las consecuencias más vistas y afectables de la tala de árboles son:</p></strong>
          <p>-La desaparición de la vegetación en cualquier parte del mundo.</p>
          <p>-La desaparición de las zonas forestadas, produce la pérdida de los animales ya que para su supervivencia es indispensable de estas zonas.</p>
          <p>-La erosión de los suelos.</p>
          <p>-Los líquidos que pueden afectar las aguas.</p>
          
          <img className="Img1" src="./img/Img1.jpeg" alt="Img" />

      <center><button 
      type="submit" 
      class="btn btn-success btn-lg"
      onClick={() => history.push("/CuestionarioN2")}>
      Continuar
      </button></center>
      </div>
    </div>
  );
};

export default Op2Nivel2;