//----------------LIBRERIAS-------------------
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  //---------------------ESTADOS--------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //-------------------PETICION DE REGISTRO------------------
  const registrar = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await axios({
        url: "http://localhost:4000/user",
        method: "POST",
        withCredentials: true,
        data: {
          email,
          password,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("Los paswords no coínciden");
    }
  };

  //----------------------FORMULARIO----------------------
  return (
    <div id="register-form" className="my-4 card">
      <div className="card-header bg-dark">
        <h2 className="mb-2 text-white">Registro de usuario</h2>
      </div>

      <div className="card-body">
        <form onSubmit={registrar}>
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
          <input
            className="form-control mb-2"
            type="password"
            name="repeat-password"
            placeholder="repeat password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button className="btn btn-success">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

//--------------------EXPORT----------------------
export default RegisterForm;
