//----------------LIBRERIAS-------------------
import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  //---------------------ESTADOS--------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //-------------------PETICION DE LOGIN------------------
  const loguearse = async (e) => {
    e.preventDefault();
    await axios({
      url: "http://localhost:4000/user/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));
  };

  //----------------------FORMULARIO----------------------
  return (
    <div id="login-form" className="my-4 card">
      <div className="card-header bg-dark">
        <h2 className="mb-2 text-white">Login</h2>
      </div>

      <div className="card-body">
        <form onSubmit={loguearse}>
          <input
            className="form-control mb-2"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-success">Loguearse</button>
        </form>
      </div>
    </div>
  );
};

//--------------------EXPORT----------------------
export default LoginForm;
