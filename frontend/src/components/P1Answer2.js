import React from "react";
import {Link, withRouter} from "react-router-dom";
const P1Answer2 = (props) => {
const {history}=props;
  return (
    <div className="P1Answer2">
      <header>
      <nav className="navbar navbar-light bg-light">
   <span className="navbar-brand mb-0 h1">Level 2</span>
  </nav>  
    </header>
      <h3 className="Titulo">
      Descripción de procesos geológicos en otro planeta
      </h3>
      <div className="La tala de arboles en la actualidad">
      <strong><p className="p1"> </p> Los avances de los últimos tiempos en el conocimiento geológico de diversas regiones de Marte, han permitido efectuar interpretaciones novedosas de su evolución y los procesos que operaron tanto en su interior como en su superficie. Ahora sabemos mucho más de las rocas, de los ambientes donde se formaron y de los cambios climáticos acaecidos a lo largo de la compleja y apasionante historia del planeta rojo. </strong>
          
          
          <img className="img1" src="./img/USGS-MarsMap-sim3292-20140714-crop.png" alt="img" />
          
      <center><button 
      type="submit" 
      class="btn btn-success btn-lg"
      onClick={() => history.push("/P1Level")}>
      Continue
      </button></center>
      </div>
    </div>
  );
};

export default P1Answer2;