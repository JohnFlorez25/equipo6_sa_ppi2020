import React from "react";
import {Link, withRouter} from "react-router-dom";
const P1Level = (props) => {
const {history}=props;
  return (
    <div className="Op2Nivel2">
      <header>
      <nav className="navbar navbar-light bg-light">
   <span className="navbar-brand mb-0 h1">NIVEL 2</span>
  </nav>  
    </header>
      <h3 className="Titulo">
      Consecuencias
      </h3>
      <div className="Consecuencias">
      <strong><p>Las consecuencias más evidentes de las catástrofes de origen natural o geológico son:</p></strong>
          <p>En el caso de los terremotos: Movimiento y ruptura del suelo, corrimientos y deslizamientos de tierra, incendios, licuefacción del suelo, inundaciones e impactos humanos</p>
          <p>Los impactos humanos de los terremotos son: Un sismo puede causar lesiones o incluso pérdidas de vidas, daños en las carreteras y puentes, daño general de los bienes, y colapso o desestabilización de edificios. También puede ser el origen de enfermedades, falta de necesidades básicas, y primas de seguros más elevadas. </p>
          <p>En el caso de los maremotos: Debido a que la energía de los tsunamis tectónicos es casi constante, pueden llegar a cruzar océanos y afectar a costas muy alejadas del lugar del suceso. La trayectoria de las ondas puede modificarse por las variaciones del relieve abisal, fenómeno que no ocurre con las olas superficiales. A medida que un tsunami se aproxima a la costa, puede ascender varios metros o, en raras ocasiones, decenas de metros, y causar la pérdida de muchas vidas y daños a la propiedad al tocar tierra, inundación, erosión, incendios, contaminación del agua potable, brotes de infecciones y enfermedades, y colapso de construcciones</p>
          <p>Hay más acontecimientos geológicos, pero ésta sería una breve descripción</p>
          
          <img className="Img1" src="./img/Img1.jpeg" alt="Img" />

      <center><button 
      type="submit" 
      class="btn btn-success btn-lg"
      onClick={() => history.push("/CuestionarioN2")}>
      Continuar
      </button></center>
      </div>
    </div>
  );
};

export default P1Level;