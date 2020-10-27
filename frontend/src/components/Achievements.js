import React from "react";
import { Link, withRouter } from "react-router-dom";
const Achievements = (props) => {
  const { history } = props;
  return (
    <div className="Achievements">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Achievements and rankings</span>
        </nav>
      </header>
      <img className="Trofeo" src="./img/trophys.png" alt="Tro" />
      <h3 className="Sesion1">Table of positions</h3>

      <div class="card border-success mb-3" Logros="max-width: 18rem;">
        <div class="card-header">Luisa Villada</div>
        <div class="card-body text-success">
          <h5 class="card-title">Result: 100</h5>
          <p class="card-text">Top Ranking: 1</p>
        </div>
      </div>
      <div class="card border-danger mb-3" Achievements="max-width: 18rem;">
        <div class="card-header">Arley Quintero</div>
        <div class="card-body text-danger">
          <h5 class="card-title">Result: 60</h5>
          <p class="card-text">Top Ranking: 2</p>
        </div>
      </div>
      <div class="card border-warning mb-3" Logros="max-width: 18rem;">
        <div class="card-header">Ximena Ortiz</div>
        <div class="card-body text-warning">
          <h5 class="card-title">Result: 20</h5>
          <p class="card-text">Top Ranking: 3</p>
        </div>
      </div>

      <button 
      type="button" 
      class="btn btn-success btn-lg"
      onClick={() => history.push("/CuestionarioN2")}>
      Volver
      </button>
    </div>
  );
};

export default Achievements;
