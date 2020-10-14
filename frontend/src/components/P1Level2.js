import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Op2Nivel2.css";
const P1Level2 = (props) => {
  const { history } = props;
  return (
    <div className="Op2Nivel2">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">ESTADOS DE EMERGENCIA</span>
        </nav>
        <p Op2Nivel2="margin: 4px" />
      </header>
      
      <img className="img" src="./img/Img1.jpg" alt="img" />

      <div>
        <p Op2Nivel2="margin: 4px" />
        <button
          type="submit"
          class="btn1 btn-secondary btn-lg"
          onClick={() => history.push("/")}
        >
          NIVEL 1
        </button>
        <p Op2Nivel2="margin: 4px" />
        <center><button 
        type="submit" 
        class="btn btn-lg btn-secondary" 
        disabled>
        Nivel2</button></center>
      </div>
    </div>
  );
};

export default P1Level2;
