import React from "react";
import { Link, withRouter } from "react-router-dom";

const Start = (props) => {
  const { history } = props;
  return (
    <div className="Inicio">
      <img className="Logo" src="./img/logo.png" alt="Logo" />
      <p>"Powerful and shadowy, Great Force of geology"</p>
      <button
        type="submit"
        class="btn btn-secondary btn-lg"
        onClick={() => history.push("/Login")}
      >
        Login
      </button>
    </div>
  );
};

export default Start;

