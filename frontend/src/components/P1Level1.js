import React from "react";
import { Link, withRouter } from "react-router-dom";
const P1Level1 = (props) => {
  const { history } = props;
  return (
    <div className="Op2Nivel1">
      <center>
        <h1 className="N2">Estado de emergencia</h1>
      </center>
      <img className="Audio" src="./img/audio.png" alt="audio" />

      <div>
        <p Header="margin: 4px" />
        <button
          type="submit"
          class="btn1 btn-secondary btn-lg"
          onClick={() => history.push("/")}
        >
          NIVEL 1
        </button>
        <p Header="margin: 4px" />
        <button
          type="submit"
          class="btn1 btn-info btn-lg"
          onClick={() => history.push("/")}
        >
          NIVEL 2
        </button>
      </div>
    </div>
  );
};

export default P1Level1;
