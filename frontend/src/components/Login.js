import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style/Iniciosesion.css";
const Login = (props) => {
  const { history } = props;
  return (
    <div className="Iniciosesion">
      <p>Login</p>

      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">User</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="JheinyG"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Password</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="*******"
          />
        </div>
        <p Header="margin: 5px" />
      </form>

      <div>
        <p Header="margin: 4px" />
        <button type="button" className="btn1 btn-secondary btn-lg">
          Enterokay
        </button>
        <p Header="margin: 1px" />
        <button
          type="submit"
          class="btn2 btn-secondary btn-lg"
          onClick={() => history.push("/Register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
