import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Perfil.css";
const Profile = (props) => {
  const { history } = props;
  return (
    <div className="Profile">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">PERFIL DE USUARIO</span>
        </nav>
      </header>

      <div class="card mb-3" Perfil="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="./img/Usuario.png" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Nombre Apellidos</h5>
              <p class="card-text">Puntos Obtenidos: 80p</p>
              <p class="card-text">
                <small class="text-muted">Cuestionarios realizados: x</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">TROFEOS OBTENIDOS</span>
        </nav>
      </header>
      <div class="card" Perfil="width: 18rem;">
        <div class="card-body"></div>
        <img src="./img/Trofeos.png" class="card-img-top" alt="..." />
      </div>

      <center>
        <button
          type="button"
          class="btn3 btn-success btn-lg"
          onClick={() => history.push("/")}
        >
          Cerrar sesión
        </button>
      </center>
    </div>
  );
};

export default Profile;
