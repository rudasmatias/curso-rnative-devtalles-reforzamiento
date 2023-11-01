import Funciones from "./typescript/Funciones";
import ObjectosLiterales from "./typescript/ObjectosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";
import Contador from "./components/Contador";
import ContadorConHook from "./components/ContadorConHook";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="mt-2  text-white">
      <h1>Introducción a TS - React</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjectosLiterales />
      <hr />
      <Funciones />
      <hr />
      <Contador />
      <hr />
      <ContadorConHook />
      <hr />
      <Login />
    </div>
  );
};

export default App;
