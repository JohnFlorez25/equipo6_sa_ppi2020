import React from "react";

import { Registro } from "../components/Registro";
import App from "../components/App";
import Task_app from "../components/Task_app";
import Mapa from "../components/Mapa";
import MapView from "../components/MapView";
import Home from "../components/Home";

export default function PpiContainer() {
  return (
    <div className="PpiContainer">
      <App />
      <Registro />
      <Task_app />
      <Mapa />
    </div>
  );
}
