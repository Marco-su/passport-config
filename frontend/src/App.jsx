import "./App.css";
import LoginForm from "./components/LoginForm";
import ObtenerUsuario from "./components/ObtenerUsuario";
import RegForm from "./components/RegForm";

function App() {
  return (
    <div className="App">
      <RegForm />
      <LoginForm />
      <ObtenerUsuario />
    </div>
  );
}

export default App;
