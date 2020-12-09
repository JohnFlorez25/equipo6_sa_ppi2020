import React from "react";
import { Link, withRouter } from "react-router-dom";
const Menu = (props) => {
  const { history } = props;
  return (
    <div className="Menu">
      <center>
        <h1>Principal</h1>
      </center>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        onClick={() => history.push("/P1Level")}
      >
        Procesos geológicos planetarios
      </button>
      <p Header="margin: 10px" />
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        onClick={() => history.push("/P1Answer1")}
      >
        Information
      </button>
      <p Header="margin: 10px" />
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        onClick={() => history.push("/Solutions")}
      >
        Solutions
      </button>
    </div>
  );
};

export default Menu;
