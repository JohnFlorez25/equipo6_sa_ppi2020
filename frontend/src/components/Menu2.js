import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Menu2.css";
const Menu2 = (props) => {
const {history}=props;
  return (
    <div className="Menu2">
    <center><h1 className="N2">Procesos geológicos planetarios</h1></center>
      <img className="Video" src="./img/camera2.png" alt="video" />

      <div>
        <p Header="margin: 4px"/>
        <button type="submit" 
          class="btn1 btn-secondary btn-lg"
          onClick={() => history.push("/Menu2")}>
          Level 1
        </button>
        <p Header="margin: 4px"/>
        <button type="submit" 
          class="btn1 btn-info btn-lg"
          onClick={() => history.push("/Menu2")}>
          Level 2
        </button>
      </div>
</div>

  );
  };

export default Menu2;