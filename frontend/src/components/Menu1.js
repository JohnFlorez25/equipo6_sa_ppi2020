import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../style/Menu1.css";
const Menu1 = (props) => {
const {history}=props;
  return (
    <div className="Menu1">
    <center><h1 className="N2">Procesos geológicos planetarios</h1></center>
      <img className="Video" src="./img/camera2.png" alt="video" />

      <div>
        <p Header="margin: 4px"/>
        <button type="submit" 
          class="btn1 btn-secondary btn-lg"
          onClick={() => history.push("/Menu1")}>
          Level 1
        </button>
        <p Header="margin: 4px"/>
        <button 
        type="submit" 
        class="btn btn-lg btn-secondary" 
        disabled>
        Level 2</button>
      </div>
</div>

  );
  };

export default Menu1;