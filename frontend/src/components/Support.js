import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Soporte.css";
const Soporte = (props) => {
const {history}=props;
  return (
    <div className="Soporte">
    <header>
      <nav className="navbar navbar-light bg-light">
   <span className="navbar-brand mb-0 h1">SOPORTE</span>
  </nav>  
    </header>
  <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Nombre de usuario</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingresa tu nombre de usuario"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Escribe el problema</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Escribe tu problema"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Sugerencias</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Escribe tu sugerencia"/>
  </div>
      <button 
      type="button" 
      class="btn btn-success btn-lg"
      onClick={() => history.push("/CuestionarioN2")}>
      Enviar
      </button>
</form>

    </div>
  );
  };

  export default Soporte;