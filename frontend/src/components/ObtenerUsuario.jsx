import axios from "axios";

const ObtenerUsuario = () => {
  const buscarUsuario = async () => {
    await axios({
      url: "http://localhost:4000/user",
      withCredentials: true,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div id="obtener-usuario" className="my-4 card">
      <div className="card-header bg-dark">
        <h2 className="mb-2 text-white">Obtener Usuario</h2>
      </div>

      <div className="card-body">
        <button className="btn btn-success" onClick={buscarUsuario}>
          Obtener
        </button>
      </div>
    </div>
  );
};

export default ObtenerUsuario;
